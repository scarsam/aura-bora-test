const stripe = require('stripe')(process.env.GATSBY_STRIPE_SECRET_KEY)

exports.handler = (event, context, callback) => {
  const order = JSON.parse(event.headers.order)

  stripe.orders.update('or_1GgK3xCv9pCFw7gsPjpkwx42', function(err, order) {
    const updatedOrder = { ...order, status: 'fulfilled' }
    if (err) {
      return callback(err)
    }
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(updatedOrder),
    })
  })
}
