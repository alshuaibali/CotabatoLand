var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: new google.maps.LatLng(7.197192, 124.234861),
          mapTypeId: 'roadmap'
        });

        var iconBase = 'MyImages/iconcot/';
        var icons = {
          asikasik: {
            icon: iconBase + 'asikasik.ico'
          },
          bluelagoon: {
            icon: iconBase + 'bluelagoon.ico'
          },
          cityhall: {
            icon: iconBase + 'cotmun4.ico'
          },
          cotcityplaza: {
            icon: iconBase + 'cityplazan.ico'
          },
          grandmosque: {
            icon: iconBase + 'grandmosque.ico'
          },
          kutawatocave: {
            icon: iconBase + 'kutawatocave.ico'
          }
        };

        var features = [
          {
            position: new google.maps.LatLng(7.134730, 124.296537),
            type: 'bluelagoon'
          }, {
            position: new google.maps.LatLng(7.561595, 124.535440),
            type: 'asikasik'
          }, {
            position: new google.maps.LatLng(7.197192, 124.234861),
            type: 'cityhall'
          }, {
            position: new google.maps.LatLng(7.223553, 124.246805),
            type: 'cotcityplaza'
          }, {
            position: new google.maps.LatLng(7.202440, 124.165160),
            type: 'grandmosque'
          }, {
            position: new google.maps.LatLng(7.220694, 124.242194),
            type: 'kutawatocave'
          }
        ];

        // Create markers.
        features.forEach(function(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });
        });
      }