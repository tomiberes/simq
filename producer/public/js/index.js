'use strict';

(function() {
  var $order = $('#order');

  $order.on('submit', function($ev) {
    var values = {};
    $ev.preventDefault();
    $order.find(':input').each(function() {
      values[this.name] = $(this).val();
    });
    $.ajax({
      url: 'order',
      method: 'post',
      dataType: 'text',
      data: values
    }).done(function(data) {
      // don't care
    }).fail(function(err) {
      // still don't care
    });
  });
})();
