const stripe = require('stripe')('sk_test_Zy0cOQcIEjbbyQido9m82Gd700p1U9C9Ve')

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
