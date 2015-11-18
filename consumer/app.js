'use strict';

let express = require('express');
let argv = require('yargs').argv;
let site = require('./routes/site');
let order = require('./routes/order');
let amqp = require('./amqp/core');
let app = express();

module.exports = app;

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

site.setConsumer(argv.routingKey);

app.get('/', site.index);
app.get('/orders', order.list);

amqp.bootstrap(argv.routingKey, argv.exchange);

app.listen(argv.port);
