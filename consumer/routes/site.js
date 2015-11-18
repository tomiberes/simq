'use strict';

let consumer = null;

exports.index = (req, res) => {
  res.render('index', { title: 'consumer '  + consumer });
};

exports.setConsumer = (consumerName) => {
  consumer = consumerName;
};
