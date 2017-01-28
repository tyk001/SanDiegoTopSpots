$(document).ready(function() {
  listSpots();
  function listSpots() {
    $.getJSON("topspots.json", function(data) { // pulling in the data
      $.each(data, function(index, item) {
        var currentRow = "<tr><td>" + item.name + "</td><td>" + item.description + "</td><td><a href='https://www.google.com/maps?q=" + item.location + "'><button id='submitButton' class='btn btn - primary'>Open in Maps</button></a></td></tr>";
        $(currentRow).appendTo('#goHere');
      });
    });
  };
})
