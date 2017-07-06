var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: new google.maps.LatLng(7.197192, 124.234861),
          mapTypeId: 'roadmap'
        });

        var iconBase = 'MyImages/CotabatoH/';
        var icons = {
          asikasik: {
            icon: iconBase + 'asikasik.jpg'
          },
          bluelagoon: {
            icon: iconBase + 'bluelagoon.jpg'
          },
          cityhall: {
            icon: iconBase + 'cotmun4.jpg'
          },
          cotcityplaza: {
            icon: iconBase + 'cityplazan.jpg'
          },
          grandmosque: {
            icon: iconBase + 'grandmmosque.jpg'
          },
          kutawatocave: {
            icon: iconBase + 'kutawatocave.jpg'
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