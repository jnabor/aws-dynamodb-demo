const AWS = require('aws-sdk')
var dynamodb = new AWS.DynamoDB({region: 'ap-southeast-1', apiVersion: '2012-08-10'})

exports.handler = (event, context, callback) => {

    if (event.Type == 'All') {
        
        const params = {
            ReturnConsumedCapacity: event.ReturnConsumedCapacity,
            TableName: event.TableName
        }
        
        dynamodb.scan(params, function(err, data) {
            if (err) {
                console.log(err, err.stack)
                callback(err, err.stack)
            } else {
                console.log(data)
                callback(null, data)
            }    
        })

    } else if (event.Type == 'Query') {
        
        const params = {
            ExpressionAttributeValues: event.ExpressionAttributeValues,
            KeyConditionExpression: event.KeyConditionExpression,
            ReturnConsumedCapacity: event.ReturnConsumedCapacity,
            TableName: event.TableName,
        }
        
        dynamodb.query(params, function(err, data) {
            if (err) {
                console.log(err, err.stack)
                callback(err, err.stack)
            } else {
                console.log(data)
                callback(null, data)
            }    
        })
        
    } else if (event.Type == 'Single') {
        
        const params = {
            Key: event.Key,
            ReturnConsumedCapacity: event.ReturnConsumedCapacity,
            TableName: event.TableName
        }
        
        dynamodb.getItem(params, function(err, data) {
            if (err) {
                console.log(err, err.stack)
                callback(err, err.stack)
            } else {
                console.log(data)
                callback(null, data)
            }    
        })
        
    } else {
        callback(null, 'undefined type!')
    }
}