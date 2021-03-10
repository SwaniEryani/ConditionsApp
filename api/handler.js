const awsServerlessExpress = require('aws-serverless-express');

const app = require('./src/index');

const server = awsServerlessExpress (app);

exports.handler = (event, context) =>{
  return awsServerlessExpress.proxy(server, event, context);
}
