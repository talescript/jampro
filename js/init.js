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
  var imgDefer = document.querySelectorAll('img');

  for (var i=0; i < imgDefer.length; i++) {
    if (imgDefer[i].getAttribute('data-src')) {
      // var imgParent = imgDefer[i].parentNode.parentNode;
      // imgParent.classList.remove('loadImg');
      imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
    }
    [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
      img.setAttribute('src', img.getAttribute('data-src'));
      img.onload = function() {
        img.removeAttribute('data-src');
      }
    })
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