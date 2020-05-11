const stripe = require('stripe')(process.env.GATSBY_STRIPE_SECRET_KEY)
const { promisify } = require('util')
const request = promisify(require('request'))

export async function handler({ body, headers }) {
  function postShipStationRequest({ endpoint, body }) {
    return request({
      method: 'POST',
      url: `https://ssapi.shipstation.com/${endpoint}`,
      auth: {
        username: process.env.GATSBY_SHIPSTATION_USERNAME,
        password: process.env.GATSBY_SHIPSTATION_PASSWORD,
      },
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  }

  function getShipStationRequest({ endpoint }) {
    return request({
      method: 'GET',
      url: `https://ssapi.shipstation.com/${endpoint}`,
      auth: {
        username: process.env.GATSBY_SHIPSTATION_USERNAME,
        password: process.env.GATSBY_SHIPSTATION_PASSWORD,
      },
      headers: { 'Content-Type': 'application/json' },
    })
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
      const { body } = await getShipStationRequest({
        endpoint: `orders?orderNumber=${orderNumber}`,
      })
      const { orders } = JSON.parse(body)
      const order = orders[0]
      if (order) {
        const orderObject = { ...order, orderStatus: 'cancelled' }
        await postShipStationRequest({
          endpoint: 'orders/createorder',
          body: orderObject,
        })
      }
    }

    return { statusCode: 200 }
  } catch (err) {
    console.log(`Stripe webhook failed with ${err}`)

    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    }
  }
}
