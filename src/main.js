  (function () {

let etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';

$.ajax({
  url: etsyURL,
  dataType: 'jsonp',
  method: 'get'
}).then (function (response) {

//original code
  var templateString = $('#itemTemplate').text();
  var templateFunction = _.template(templateString);

  _.each(response.results, function(item){

    var itemHTML = templateFunction(item);

    $('#mainContent').append(itemHTML);

  }); //end of each loop


}); // end of ajax call


}()); // end of IIFE




