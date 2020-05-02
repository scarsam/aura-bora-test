const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

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
