'use strict';

let logs = require('../amqp/logs');

exports.list = (req, res) => {
  res.type('json');
  res.status(200).send({ logs: JSON.stringify(logs.getAll()) });
};
