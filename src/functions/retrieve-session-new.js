const stripe = require('stripe')('sk_test_Zy0cOQcIEjbbyQido9m82Gd700p1U9C9Ve')

exports.handler = (event, context, callback) => {
  const sessionId = event.headers.sessionid

  stripe.checkout.sessions.retrieve(sessionId, function(err, session) {
    if (err) {
      return callback(Error(err))
    }
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(session),
    })
  })
}
