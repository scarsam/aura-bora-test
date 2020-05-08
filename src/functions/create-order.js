const stripe = require('stripe')(process.env.GATSBY_STRIPE_SECRET_KEY)

exports.handler = (event, context, callback) => {
  const order = JSON.parse(event.headers.order)

  stripe.orders.create(order, function(err, order) {
    if (err) {
      return callback(err)
    }
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(order),
    })
  })
}
