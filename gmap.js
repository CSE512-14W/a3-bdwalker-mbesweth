function init () {
        var URL = "http://data.seattle.gov/resource/3k2p-39jp.json";
        var TOKEN = "DpnZlymDFh48LN2JHFUGyM7et"
        var QUERY = "latitude,longitude";
        var LIMIT = 100;

        
        var style = [
        {
          "featureType": "water",
          "stylers": [
            { "color": "#000000" }
          ]
        },{
          "featureType": "landscape",
          "stylers": [
            { "color": "#393939" }
          ]
        },{
          "featureType": "road",
          "stylers": [
            { "color": "#6e6f6e" }
          ]
        },{
          "featureType": "administrative.neighborhood",
          "stylers": [
            { "visibility": "off" }
          ]
        },{
          "featureType": "administrative.locality",
          "stylers": [
            { "visibility": "off" }
          ]
        },{
          "featureType": "poi",
          "stylers": [
            { "visibility": "off" }
          ]
        },{
          "featureType": "transit.line",
          "stylers": [
            { "visibility": "off" }
          ]
        },{
          "featureType": "road",
          "stylers": [
            { "visibility": "simplified" }
          ]
        },{
          "elementType": "labels",
          "stylers": [
            { "visibility": "off" }
          ]
        }];

        var styledMap = new google.maps.StyledMapType(style, {name: "Seattle Styled"});

        var mapOptions = 
        {
          zoom: 12,
          center: new google.maps.LatLng(47.6097, -122.33),
          mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
          }
        };

        var map = new google.maps.Map(d3.select("#map-canvas").node(), mapOptions);
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');

        d3.json(URL + "?$select=" + QUERY + "&$limit=" + LIMIT + "&$$app_token=" + TOKEN
          , function (data) {

          // Create Google Maps overlay
          var overlay = new google.maps.OverlayView();
          
          overlay.onAdd = function() {
            var layer = d3.select(this.getPanes().overlayLayer).append("div").attr("class", "station");

            overlay.draw = function() {
              var projection = this.getProjection();
              var padding = 10;

              var marker = layer.selectAll("svg")
                .data(d3.entries(data))
                .each(transform)
                .enter()
                .append("svg:svg")
                .each(transform)
                .attr("class", "stations");

              marker.append("svg:circle")
                .attr("r", 7)
                .attr("cx", padding)
                .attr("cy", padding);

              function transform(d) {
                d = new google.maps.LatLng(d.value.latitude, d.value.longitude);
                d = projection.fromLatLngToDivPixel(d);
                return d3.select(this)
                  .style("left", (d.x - padding) + "px")
                  .style("top", (d.y - padding) + "px");
              }
            }
          }
          overlay.setMap(map);
        });
      }

      google.maps.event.addDomListener(window, 'load', init);