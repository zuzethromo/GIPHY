let disneyCharacters = ["Mickey Mouse", "The Little Mermaid", "Snow White", "Aladdin", "Toy Story", "The Incredibles", "Frozen", "Coco", "The Lion King", "Tangled"];

$('button').on('click', function(){
let x = $(this).data("search");  
let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=FQ97111psyXiVqpCGUJcUrsQ8yz57XaZ&limit=10";

$.ajax({url:queryURL, method:'GET'}).done(function(response){
    let results = response.data
    for(let i = 0; i < response.data.length; i ++) {
    let giphy = $('<div class=gifs>');
	let showGiphy = $('<img>');
		showGiphy.attr('src', results[i].images.fixed_height_small_still.url);
		showGiphy.attr('title', "Rating: " + results[i].rating);
		showGiphy.attr('data-still', results[i].images.fixed_height_small_still.url);
		showGiphy.attr('data-state', 'still');
		showGiphy.addClass('gif');
		showGiphy.attr('data-animate', results[i].images.fixed_height_small.url);
		giphy.append(showGiphy)
		$("#gifsView").prepend(giphy);
        
    }  

})

});

$(document).on('click', '.gif', function(){
let state = $(this).attr('data-state');
	if ( state == 'still'){
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }
    else{
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    };
});

function buttons (){

}























   
    

            


   