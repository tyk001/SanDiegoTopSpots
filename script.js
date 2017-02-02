$(document).ready(function() {
  var waypointsArray = [];

  function listSpots() {
    $.getJSON("topspots.json", function(data) {
      $.each(data, function(index, item) {

        // concat the table cell HTML and variables
        var currentRow = "<tr><td>" + item.name + "</td><td>" + item.description + "</td><td><a href='https://www.google.com/maps?q=" + item.location + "'><button id='submitButton' class='btn btn - primary'>Open in Maps</button></a></td></tr>";
        $(currentRow).appendTo('#goHere');

        // store coordinates in an array for later
        waypointsArray[index] = item.location;
        if (data.length == index + 1) {
          makeMap(waypointsArray);
        };
      });
    });
  };
  listSpots();
});


function makeMap(waypointsArray) {
  console.log("right inside makemap" + waypointsArray)
  var linkFront = "<img width='600' src='https://maps.googleapis.com/maps/api/staticmap?center=San+Diego,CA&zoom=13&size=600x300&maptype=roadmap&markers=color:blue";
  var linkCoords = waypointsArray.join('%7Clabel:C%7C');
  var linkApiKey = "AIzaSyB5sDZfu9lScUfVkb1TkdWge18P_YrWCL8'>";
  var linkComplete = linkFront + linkCoords + linkApiKey;
  showMap(linkComplete);
}


function showMap(linkComplete) {
  console.log("The completed link: " + linkComplete);
  $('#myDiv').html(linkComplete);
}
