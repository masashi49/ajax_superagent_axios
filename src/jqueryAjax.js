import $ from "jquery";

function jqueryAjax(page) {
  $.ajax({
    type: 'GET',
    url: page,
    data: {zipcode: 6008019}
  }).done(function (res) {
    return console.log(`ajax：${res.results[0].abstract}`);
  }).fail(function () {
    return 'error';
  }).always(function () {
    return 'complete';
  });
}

export default jqueryAjax
