module.exports.config = () => {
    return {
        iamrole: 'arn:aws:iam::815621908682:role/aws-serverless-framework-role',
        dynamodbpolicy: 'arn:aws:iam::815621908682:policy/serverless-framework-dynamodb',
        cloudwatchlogspolicy: 'arn:aws:iam::815621908682:policy/serverless-framework-cloudwatch-logs'
  }
}