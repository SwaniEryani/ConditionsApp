# ConditionsApp
Coditions app is a SPA (ingle page web application) that allows the user to see list of conditions and investigate potential illness.

# Stack

## BackEnd
is an API that displays the contents of the supplied JSON file. in folder `data/coniditions.json`, and the aplication is already deployed  on AWS lambda (https://gh3f4o13vd.execute-api.us-east-1.amazonaws.com/dev/api/condition)

### uesing 
- serverless;
- express;
- aws-serverless-express;
- body-parser;
- cors;

### Run the api
to run the api in the root folder open the terminal type `cd api` then `npm run start` to run the node or `npm run devStart` to run nodemon.
in the console you will see `app listening on port 5000` this means it is working. next open the browser then put the url `http://localhost:5000/api/condition` this is the endpoint where the api send the response as JSON file.

## frontEnd 

Displays an the image, title and snippet for all the conditions fetched from teh api and it is responsive 

### using 
- create react app
- axios

### Run the frontEnd
to run the api in the root folder open the terminal type `cd front` then `npm  start` to run the app on the browser you will se the app 

## Screen Shots

### Mobile

![Mobile](https://github.com/SwaniEryani/conditionsApp/blob/master/DOX/mobile.png) 

### Desktop

![Desktop](https://github.com/SwaniEryani/conditionsApp/blob/master/DOX/desktop.png) 

### Tools
- VS code 
- Postman
- GitHub
- AWS Amplify
- AWS Lambda
- GoogleDev tool
