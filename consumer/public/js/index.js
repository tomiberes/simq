'use strict';

(function() {
  var $orderList = $('#order-list');
  var timeout = 1000;

  function listItemHtml(log) {
    return '<li><span>' + log + '</span></li>';
  }

  function appendToList(logs) {
    $orderList.empty();
    logs.forEach(function(log) {
      $orderList.append(listItemHtml(log));
    });
  }

  function getOrders() {
    $.ajax({
      url: 'orders',
      method: 'get'
    }).done(function(response) {
      appendToList(JSON.parse(response.logs));
    }).fail(function (jqXhr, status) {
      // not gonna happen
    });
  }

  // on load
  getOrders();
  // long polling
  setInterval(getOrders, timeout);
})();
