'use strict';

// In memory queue, before it's sent to mq
let _queue = [];

exports.add = (message) => {
  _queue.push(message);
};

exports.get = () => {
  return _queue.shift();
};
