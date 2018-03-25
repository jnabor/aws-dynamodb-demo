const AWS = require('aws-sdk')
var dynamodb = new AWS.DynamoDB({region: 'ap-southeast-1', apiVersion: '2012-08-10'})

module.exports.handler = (event, context, callback) => {
  const params = {
    Item: event.Item,
    ReturnConsumedCapacity: event.ReturnConsumedCapacity,
    TableName: event.TableName
  }
  dynamodb.putItem(params, function (err, data) {
    if (err) {
      console.log(err, err.stack)
      callback(err, err.stack)
    } else {
      console.log(data)
      callback(null, 'item added or updated')
    }
  })
}