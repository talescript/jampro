(function ($) {
  $(function () {

    $('.button-collapse').sideNav({
      closeOnClick: true
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space

function initMap() {
  var uluru = { lat: 8.988971, lng: -79.5243938 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}