const stripe = require('stripe')('sk_test_Zy0cOQcIEjbbyQido9m82Gd700p1U9C9Ve')

exports.handler = async (event, context) => {
  const paymentIntentId = event.headers.paymentintentid

  try {
    const payment = await stripe.paymentIntents.retrieve(paymentIntentId)
    console.log(payment)
    return {
      statusCode: 200,
      body: JSON.stringify(payment),
    }
  } catch (error) {
    console.log(error)
    return { statusCode: 500, body: error.toString() }
  }
}
