const stripe = require('stripe')(process.env.GATSBY_STRIPE_SECRET_KEY)

const {
  getShipStationRequest,
  postShipStationRequest,
} = require('../helpers/shipStation')

exports.handler = async ({ body, headers }) => {
  try {
    const stripeEvent = await stripe.webhooks.constructEvent(
      body,
      headers['stripe-signature'],
      process.env.GATSBY_STRIPE_WEBHOOK_REFUND_SECRET
    )

    if (stripeEvent.type === 'charge.refunded') {
      const eventObject = stripeEvent.data.object
      const orderNumber = eventObject.payment_intent
      getShipStationRequest({
        endpoint: `orders?orderNumber=${orderNumber}`,
        cb: existingOrders => {
          const { orders } = JSON.parse(existingOrders)
          const order = orders[0]
          if (order) {
            const updatedOrder = { ...order, orderStatus: 'cancelled' }
            postShipStationRequest({
              endpoint: 'orders/createorder',
              body: updatedOrder,
            })
          }
        },
      })
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    }
  } catch (err) {
    console.log(`Stripe webhook failed with ${err}`)

    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    }
  }
}
