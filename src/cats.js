import $ from "jquery";

function cats() {
  $.ajax({
    type: 'GET',
    url: 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=',
    data: {zipcode: 6008019}
  }).done(function (res) {
    return console.log(`ajax：${res.results[0].abstract}`);
  }).fail(function () {
    return 'error';
  }).always(function () {
    return 'complete';
  });
}


var sum = cats();
export default sum
