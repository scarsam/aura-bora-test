const stripe = require('stripe')(process.env.GATSBY_STRIPE_SECRET_KEY)
const { promisify } = require('util')
const request = promisify(require('request'))

export async function handler({ body, headers }) {
  function postShipStationRequest({ endpoint, order }) {
    return request({
      method: 'POST',
      url: `https://ssapi.shipstation.com/${endpoint}`,
      auth: {
        username: process.env.GATSBY_SHIPSTATION_USERNAME,
        password: process.env.GATSBY_SHIPSTATION_PASSWORD,
      },
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    })
  }

  try {
    const stripeEvent = await stripe.webhooks.constructEvent(
      body,
      headers['stripe-signature'],
      process.env.GATSBY_STRIPE_WEBHOOK_REFUND_SECRET
    )

    if (stripeEvent.type === 'checkout.session.completed') {
      const eventObject = stripeEvent.data.object
      const customerId = eventObject.customer
      const items = eventObject.display_items
      const shippingDetails = eventObject.shipping
      const stripeCustomer = await stripe.customers.retrieve(customerId)

      const todaysDate = new Date(Date.now())
      const order = {
        orderNumber: eventObject.payment_intent,
        orderStatus: 'awaiting_shipment',
        customerEmail: stripeCustomer.email,
        orderDate: todaysDate.toISOString(),
        items: items.map(item => ({
          name: item.sku.attributes.name,
          unitPrice: item.amount / 100, // Without this the price is 3000 usd
          quantity: item.quantity,
          imageUrl: item.sku.image,
          sku: item.sku.id,
        })),
        shipTo: {
          name: shippingDetails.name,
          street1: shippingDetails.address.line1,
          street2: shippingDetails.address.line2,
          postalCode: shippingDetails.address.postal_code,
          state: shippingDetails.address.state,
          country: shippingDetails.address.country,
        },
        billTo: {
          name: shippingDetails.name,
          street1: shippingDetails.address.line1,
          street2: shippingDetails.address.line2,
          postalCode: shippingDetails.address.postal_code,
          state: shippingDetails.address.state,
          country: shippingDetails.address.country,
        },
      }
      await postShipStationRequest({
        endpoint: 'orders/createorder',
        order,
      })
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
