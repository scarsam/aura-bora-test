var stripe = require('stripe')('sk_test_Zy0cOQcIEjbbyQido9m82Gd700p1U9C9Ve')

export function handler(event, context, callback) {
  const paymentIntentId = event.headers.paymentintentid

  stripe.paymentIntents.retrieve(paymentIntentId, function(err, payment) {
    if (err) {
      return callback(err)
    } else {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(payment),
      })
    }
  })
}
