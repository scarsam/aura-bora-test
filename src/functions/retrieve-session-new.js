const stripe = require('stripe')('sk_test_Zy0cOQcIEjbbyQido9m82Gd700p1U9C9Ve')

exports.handler = async (event, context) => {
  const sessionId = event.headers.sessionid

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    return {
      statusCode: 200,
      body: JSON.stringify(session),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
