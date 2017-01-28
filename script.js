$(document).ready(function() {

  // insert everything into an array
  function listSpots() {

    $.getJSON("topspots.json", function(data) { // pulling in the data
      console.log(data);

      // loop through the data, row by row
      $.each(data, function(spotName, spotDescription, spotLink) {
        console.log(data);

        // throw the html concatenated with the variables into a variable (currentRow)
        var currentRow = "<tr><td>" + spotName + "</td><td>" + spotDescription + "</td><td><a href='https://www.google.com/maps?q=" + spotLink + "'><button id='submitButton' class='btn btn - primary'></a></td></tr>";

        console.log(currentRow);

        //display the current info in a row
        $(currentRow).AppendTo('#goHere');
      });
    });
  };
});





/**
 * my api key
 * AIzaSyAFeBwJ_f8CPObDU2ZeQDcVb2SEcJqdrc4
**/
