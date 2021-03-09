const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const conditionsRouters= require('./routes/conditions');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/conditions', conditionsRouters);

app.listen(5000, ()=> console.log('app listening on port 5000'));

module.express = app;
