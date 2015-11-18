'use strict';

// In memory logs collection from mq
let _logs = [];

exports.add = (log) => {
  _logs.push(log);
};

exports.getAll = () => {
  return _logs;
};
