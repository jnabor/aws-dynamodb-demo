const AWS = require('aws-sdk')
var dynamodb = new AWS.DynamoDB({region: 'ap-southeast-1', apiVersion: '2012-08-10'})

module.exports.handler = (event, context, callback) => {
  const params = {
    Key: event.Key,
    ReturnConsumedCapacity: event.ReturnConsumedCapacity,
    TableName: event.TableName
  }
  dynamodb.getItem(params, function (err, data) {
    if (err) {
      console.log(err, err.stack)
      callback(err, err.stack)
    } else {
      console.log(data)
      callback(null, data)
    }
  })
}

module.response = (responseBody) => {
  const response = {
    "isBase64Encoded": false,
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true
    },
    body: JSON.stringify(responseBody)
  }
  return response
}