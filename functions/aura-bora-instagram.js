const userInstagram = require('user-instagram')

exports.handler = function(event, context, callback) {
  userInstagram('drinkaurabora')
    .then(response => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(response),
      })
    })
    .catch(error => {
      callback(error)
    })
}
