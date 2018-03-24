const AWS = require('aws-sdk')
var dynamodb = new AWS.DynamoDB({region: 'ap-southeast-1', apiVersion: '2012-08-10'})

exports.handler = (event, context, callback) => {
    
    var params = {
        Key: event.Key, 
        TableName: event.TableName
    }
    
    dynamodb.deleteItem(params, function(err, data) {
        if (err) {
            console.log(err, err.stack)
            callback(err, err.stack)
        } else {
            console.log(data)
            callback(null, 'item deleted')
        }
    })
}