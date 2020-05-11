const stripe = require('stripe')('rk_test_TWBwujzOefLlYC2dQa1WIWgP00IvBdOsdv')

exports.handler = (event, context, callback) => {
  const paymentIntentId = event.headers.paymentintentid

  stripe.paymentIntents.retrieve(paymentIntentId, function(err, paymentIntent) {
    if (err) {
      return callback(err)
    }
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(paymentIntent),
    })
  })
}
