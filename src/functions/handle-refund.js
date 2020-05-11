const stripe = require('stripe')(process.env.GATSBY_STRIPE_SECRET_KEY)
const request = require('request')

exports.handler = async ({ body, headers, callback }) => {
  function postShipStationRequest({ endpoint, body }) {
    return request(
      {
        method: 'POST',
        url: `https://ssapi.shipstation.com/${endpoint}`,
        auth: {
          username: process.env.GATSBY_SHIPSTATION_USERNAME,
          password: process.env.GATSBY_SHIPSTATION_PASSWORD,
        },
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      },
      function(error, response) {
        if (error) throw new Error(error)
        console.log(response.body)
      }
    )
  }

  function getShipStationRequest({ endpoint, cb }) {
    return request(
      {
        method: 'GET',
        url: `https://ssapi.shipstation.com/${endpoint}`,
        auth: {
          username: process.env.GATSBY_SHIPSTATION_USERNAME,
          password: process.env.GATSBY_SHIPSTATION_PASSWORD,
        },
        headers: { 'Content-Type': 'application/json' },
      },
      function(error, response) {
        if (error) throw new Error(error)
        console.log(response.body)
        cb(response.body)
      }
    )
  }

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
