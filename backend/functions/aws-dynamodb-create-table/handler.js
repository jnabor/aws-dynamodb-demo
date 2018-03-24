const AWS = require('aws-sdk')
var dynamodb = new AWS.DynamoDB({region: 'ap-southeast-1', apiVersion: '2012-08-10'})

exports.main = (event, context, callback) => {

    var params = {
        AttributeDefinitions: event.AttributeDefinitions,
        KeySchema: event.KeySchema,
        ProvisionedThroughput: {
            ReadCapacityUnits: event.ReadCapacityUnits, 
            WriteCapacityUnits: event.WriteCapacityUnits
        }, 
        TableName: event.tablename
    }

    dynamodb.createTable(params, function(err, data) {
        if (err) {
            console.log(err, err.stack)
            callback(err, err.stack)
        } else {
            console.log(data)
            callback(null, 'table created')
        }
    })
}