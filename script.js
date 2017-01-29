$(document).ready(function() {
  function listSpots() {
    var waypointsArray = [];
    $.getJSON("topspots.json", function(data) { // pulling in the data
      $.each(data, function(index, item) {

        // concat the table cell HTML and variables
        var currentRow = "<tr><td>" + item.name + "</td><td>" + item.description + "</td><td><a href='https://www.google.com/maps?q=" + item.location + "'><button id='submitButton' class='btn btn - primary'>Open in Maps</button></a></td></tr>";
        $(currentRow).appendTo('#goHere');

        // store coordinates in an array
        var i = i + 1;
        waypointsArray[i] = item.location;

      });
    });
    showMap(waypointsArray);
  };
  listSpots();
});



function showMap(waypointsArray) {

  console.log(waypointsArray[4]);
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(32.71, -117.16),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < waypointsArray.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(waypointsArray[i]),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(waypointsArray[i]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}
