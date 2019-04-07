
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 15
    });

    map.addListener('click', function(e) {
        placeMarker(e.latLng, map);
    });
    
    function placeMarker(position, map) {
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: "./assets/place2.png"
        });
        map.panTo(position);
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                icon: "./location.png",
                });
                map.setCenter(pos);
          }, function() {
                handleLocationError(true, marker, map.getCenter());
          });
        } else {
          handleLocationError(false, marker, map.getCenter());
        }
      }

function handleLocationError(browserHasGeolocation, marker, pos) {
    marker.setPosition(pos);
    marker.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
        marker.open(map);
      }