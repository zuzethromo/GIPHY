$('button').on('click', function(){
    let x = $(this).data("search");

    let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=FQ97111psyXiVqpCGUJcUrsQ8yz57XaZ&limit=10";

    $.ajax({url:queryURL, method:'GET'})
    .done(function(response){
        for(let i = 0; i < response.data.length; i ++) {
            $('#GIFArea').prepend("<p>Rating: " + response.data[i].rating + "</p>");
            $('#GIFArea').prepend("<img src= '" + response.data[i].images.downsized.url + "'>");
        }

         })
})




   