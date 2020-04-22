var stripe = require('stripe')('sk_test_Zy0cOQcIEjbbyQido9m82Gd700p1U9C9Ve')

exports.handler = (event, context, callback) => {
  const paymentIntentId = event.headers.paymentintentid

  return new Promise(function(resolve, reject) {
    stripe.paymentIntents.retrieve(paymentIntentId, function(err, payment) {
      if (err) {
        return reject(err)
      } else {
        resolve({
          statusCode: 200,
          body: JSON.stringify(payment),
        })
      }
    })
  })
}
