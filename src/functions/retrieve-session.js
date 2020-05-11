const stripe = require('stripe')('rk_test_TWBwujzOefLlYC2dQa1WIWgP00IvBdOsdv')

exports.handler = (event, context, callback) => {
  const sessionId = event.headers.sessionid

  stripe.checkout.sessions.retrieve(sessionId, function(err, session) {
    if (err) {
      return callback(err)
    }
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(session),
    })
  })
}
