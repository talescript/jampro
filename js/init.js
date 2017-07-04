$(document).ready(function () {

  $('.button-collapse').sideNav({
    closeOnClick: true
  });

  $('.carousel').carousel({
    indicators: true,
  });

}); // end of document ready

window.onload = function() {
  loadImages();
  var gooM = document.getElementById("googleMap");
  if (window.addEventListener)
  window.addEventListener("load", initMap, false);
  else if (window.attachEvent)
  window.attachEvent("onload", initMap);
  else window.onload = initMap;
}

function loadImages() {
  var imgDefer = document.getElementsByTagName('img');
  for (var i=0; i < imgDefer.length; i++) {
    if (imgDefer[i].getAttribute('data-src')) {
      imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
    }
  }
}

function initMap() {
  var uluru = { lat: 8.989095, lng: -79.524172 };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}