$(document).ready(function(){

var topics = ["game_of_thrones","westworld","glee","greys_anatomy","xena","supergirl","the_100","altered_carbon","mandalorian","witcher"];

loadMyButtons function () {
for (let i = 0; i < topics.length; i++) {
    $('.container').append('<button class="myButtons">'+i+'</button>')
}
}):


$('button').on('click', function(){
    var x = $(this).data("search");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+x+"api_key=EMnje5ltikMUNTWYIe2zIPbyzxMYQvwy&limit=10";

    $.ajax({
            url: queryURL,
            method: "GET"
        });
        .done(function(response){
            console.log(response);

        });
});






});