$(document).ready(function () {
  //Initial array of tv shows
  var tvShows = [
    "game_of_thrones",
    "westworld",
    "glee",
    "greys_anatomy",
    "xena",
    "supergirl",
    "the_100",
    "altered_carbon",
    "mandalorian",
    "witcher",
  ];

  // displayMovieInfo function re-renders the HTML to display the appropriate content
  function displayTVShowInfo() {
    var tvShow = $(this).attr("data-name");
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      tvShow +
      "&api_key=EMnje5ltikMUNTWYIe2zIPbyzxMYQvwy&limit=10";
    console.log(queryURL);

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
    $('#tvShows-view').append("<p>Rating: "+response.data[0].rating+"</p>");
        // Creating a div to hold the tv
      var tvShowDiv = $("<div class='tvShow'>");

      
    });
  }

  // Function for displaying tv gif
  function renderButtons() {
    // Deleting the gifs prior to adding new gifs
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of gif tvShows
    for (var i = 0; i < tvShows.length; i++) {
      // Then dynamicaly generating buttons for each gif tvShows in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class of tvShows-btn to our button
      a.addClass("tvShows-btn");
      // Adding a data-attribute
      a.attr("data-name", tvShows[i]);
      // Providing the initial button text
      a.text(tvShows[i]);
      // Adding the button to the buttons-view div
      $("#buttons-view").append(a);
    }
  }

  // This function handles events where a button is clicked
  $("#add-tvShow").on("click", function (event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var tvShow = $("#tvShow-input").val().trim();

    // Adding tvshow from the textbox to our array
    tvShows.push(tvShow);

    // Calling renderButtons which handles the processing of our tvShows array
    renderButtons();
  });

  // Adding a click event listener to all elements with a class of "tvShows-btn"
  $(document).on("click", ".tvShows-btn", displayTVShowInfo);

  // Calling the renderButtons function to display the intial buttons
  renderButtons();
});
