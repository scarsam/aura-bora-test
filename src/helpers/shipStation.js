const request = require('request')

const options = {
  auth: {
    username: process.env.SHIPSTATION_USERNAME,
    password: process.env.SHIPSTATION_PASSWORD,
  },
  headers: { 'Content-Type': 'application/json' },
}

function postShipStationRequest({ endpoint, body }) {
  return request(
    {
      method: 'POST',
      url: `https://ssapi.shipstation.com/${endpoint}`,
      ...options,
      body: JSON.stringify(body),
    },
    function(error, response) {
      if (error) throw new Error(error)
      console.log(response.body)
    }
  )
}

function getShipStationRequest({ endpoint, cb }) {
  return request(
    {
      method: 'GET',
      url: `https://ssapi.shipstation.com/${endpoint}`,
      ...options,
    },
    function(error, response) {
      if (error) throw new Error(error)
      cb(response.body)
    }
  )
}

exports.postShipStationRequest = postShipStationRequest
exports.getShipStationRequest = getShipStationRequest
