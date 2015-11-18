'use strict';

let routingKeys = null;

exports.index = (req, res) => {
  res.render('index', {
    title: 'producer',
    routingKeys: routingKeys
  });
};

exports.setRoutingKeys = (routingKeysNames) => {
  routingKeys = routingKeysNames;
};
