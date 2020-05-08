$(document).ready(function () {
  //Initial array of tv shows
  var topics = [
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
      "api_key=EMnje5ltikMUNTWYIe2zIPbyzxMYQvwy&limit=10";

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      // Creating a div to hold the movie
      var tvShowDiv = $("<div class='tvShow'>");

      // Storing the rating data
      var rating = response.Rated;

      // Creating an element to have the rating displayed
      var pOne = $("<p>").text("Rating: " + rating);

      // Displaying the rating
      tvShowDiv.append(pOne);






      // Retrieving the URL for the image
      var imgURL = response.Poster;

      // Creating an element to hold the image
      var image = $("<img>").attr("src", imgURL);

      // Appending the image
      movieDiv.append(image);

      // Putting the entire movie above the previous movies
      $("#movies-view").prepend(movieDiv);
    });
  }

  // Function for displaying tv gif
  function renderButtons() {
    // Deleting the gifs prior to adding new gifs
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of gif topics
    for (var i = 0; i < topics.length; i++) {
      // Then dynamicaly generating buttons for each gif topic in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class of movie-btn to our button
      a.addClass("topics-btn");
      // Adding a data-attribute
      a.attr("data-name", topics[i]);
      // Providing the initial button text
      a.text(topics[i]);
      // Adding the button to the buttons-view div
      $("#buttons-view").append(a);
    }
  }

  // This function handles events where a movie button is clicked
  $("#add-movie").on("click", function (event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var movie = $("#movie-input").val().trim();

    // Adding movie from the textbox to our array
    movies.push(movie);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
  });

  // Adding a click event listener to all elements with a class of "movie-btn"
  $(document).on("click", ".movie-btn", displayMovieInfo);

  // Calling the renderButtons function to display the intial buttons
  renderButtons();

  // loadMyButtons function () {
  // for (let i = 0; i < topics.length; i++) {
  //     $('.container').append('<button class="myButtons">'+i+'</button>')
  // }
  // }):

  // $('button').on('click', function(){
  //     var x = $(this).data("search");

  //     var queryURL = "https://api.giphy.com/v1/gifs/search?q="+x+"api_key=EMnje5ltikMUNTWYIe2zIPbyzxMYQvwy&limit=10";

  //     $.ajax({
  //             url: queryURL,
  //             method: "GET"
  //         });
  //         .done(function(response){
  //             console.log(response);

  //         });
  // });
});
