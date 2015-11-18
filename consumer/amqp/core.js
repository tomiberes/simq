'use strict';

let amqp = require('amqplib');
let logs = require('./logs');
let exchangeName = null;
let routingKey = null;

function handleError(err) {
  // at least record it
  console.error(err);
}

function logMessage(message) {
  logs.add(message.content.toString());
}

function connect() {
  amqp.connect('amqp://localhost').then((connection) => {
    return connection.createChannel();
  }).then((channel) => {
    return channel.assertExchange(exchangeName, 'direct', { durable: false }).then(() => {
      return channel.assertQueue('', { exclusive: true });
    }).then((queueOk) => {
      let queue = queueOk.queue;
      return channel.bindQueue(queue, exchangeName, routingKey).then(() => {
        channel.consume(queue, logMessage, { noAck: true });
      });
    });
  }).catch(handleError);
}

exports.bootstrap = (routingKeyName, exchange) => {
  routingKey = routingKeyName;
  exchangeName = exchange;
  connect();
};
