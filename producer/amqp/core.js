'use strict';

let amqp = require('amqplib');
let queue = require('./queue');
let exchangeName = null;
let channel = null;

function handleError(err) {
  // at least record it
  console.error(err);
}

function publish(message) {
  try {
    channel.publish(exchangeName, message.routingKey, new Buffer(message.content), (err, ok) => {
      if (err) handleError(err);
    });
  } catch (err) {
    handleError(err);
  }
}

function connect() {
  amqp.connect('amqp://localhost').then((connection) => {
    return new Promise((resolve, reject) => {
      return resolve(connection.createChannel());
    });
  }).then((ch) => {
    channel = ch;
    return channel.assertExchange(exchangeName, 'direct', { durable: false });
  }).then(() => {
    setInterval(() => {
      let message = queue.get();
      if (message) publish(message);
    });
  }).catch(handleError);
}

exports.bootstrap = (exchange) => {
  exchangeName = exchange;
  connect();
};
