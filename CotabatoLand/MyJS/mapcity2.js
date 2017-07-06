function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: {lat: 7.197192, lng:124.234861}
        });

        // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: '<script src="MyImages/markerclusterer/m1.png">'});
      }
      var locations = [
        {lat: 7.223525, lng: 124.246818},
        {lat: 7.220177, lng: 124.241929},
        {lat: 7.202436, lng: 124.165152},
        {lat: 7.134720, lng: 124.296547}
      ]