function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 18
  });
	var input1 = (document.getElementById("origen"));
    var autocomplete = new google.maps.places.Autocomplete(input1);
        autocomplete.bindTo("bounds", map);

	var input2 = (document.getElementById("destino"));
    var autocomplete = new google.maps.places.Autocomplete(input2);
        autocomplete.bindTo("bounds", map);
  var infoWindow = new google.maps.InfoWindow({map: map});

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent("Estas aquí");
      map.setCenter(pos);
    },
    function() {
		handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Si el navegador no es compatible:
    handleLocationError(false, infoWindow, map.getCenter());
  }
}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: El servicio Geolocation falló.' :
                        'Error: Tu navegador no soporta Geolocation.');
}
