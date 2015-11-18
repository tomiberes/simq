'use strict';

let queue = require('../amqp/queue');

exports.add = (req, res) => {
  queue.add({
    routingKey: req.body.location,
    content: req.body.content
  });
  res.status(200).end();
};
