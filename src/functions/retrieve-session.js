var stripe = require('stripe')('sk_test_Zy0cOQcIEjbbyQido9m82Gd700p1U9C9Ve')

exports.handler = (event, context, callback) => {
  const sessionId = event.headers.sessionid
  return new Promise(function(resolve, reject) {
    stripe.checkout.sessions.retrieve(sessionId, function(err, session) {
      if (err) {
        return reject(err)
      } else {
        resolve({
          statusCode: 200,
          body: JSON.stringify(session),
        })
      }
    })
  })
}
