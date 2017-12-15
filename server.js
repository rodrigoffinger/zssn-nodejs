var express = require('express');
var cors = require('cors')
var morgan = require('morgan');
var bodyParser = require('body-parser')
var routes = require('./routes.js');
var SurvivorHandler = require('./handlers/SurvivorHandler.js');
const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json())

var handlers = {
  survivor: new SurvivorHandler()
};

function start(){
    routes.setup(app, handlers);
    app.listen(PORT);
    console.log("ZSSN API - port %d", PORT);
}

exports.start = start;
exports.app = app;