const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

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
