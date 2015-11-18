'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let argv = require('yargs').argv;
let site = require('./routes/site');
let order = require('./routes/order');
let amqp = require('./amqp/core');
let app = express();

module.exports = app;

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

site.setRoutingKeys(argv.routingKeys.split(' '));

app.get('/', site.index);
app.post('/order', order.add);

amqp.bootstrap(argv.exchange);

app.listen(argv.port);
