# aws-dynamodb-demo


## AWS DynamoDB Demo
### Serverless Stack in Amazon CloudFront
##### AWS API Gateway
##### Cognito Authorizer
##### Lambda Functions


#### Features
- [x] AWS CloudFormation with AWS Serverless Application Model
- [ ] Serverless Functions using the Serverless Framework: https://github.com/serverless/serverless
- [ ] Continuous Delivery with AWS CodeStar


#### Severless functions
1. install serverless
npm install -g serverless
2. create new function with aws template
serverless create -t aws-nodejs
3. configure with aws credentials
serverless config credentials --provider aws --key <key> --secret <secret key>
4. deloy to cloudfront
serverless deploy
 
