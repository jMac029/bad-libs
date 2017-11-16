// This is where all the javascript will
// live for the project that connects the view and model



// Controller Object for all of our Controller Functions
var controller = {

	// variables to use within the controller object

	// giphy api info:
	apiKey: "oXTcsygddx6gGqHTrnCdyGto2t9XZfy6",
	queryURL: "https://api.giphy.com/v1/gifs/search?q=" +
	        searchWord + "&api_key=" + this.apiKey + "&limit=5"

	// function to search Giphy and parse out results
	searchGiphy: () => {

		$.ajax({
	        url: contoller.queryURL,
	        method: "GET"
	      }).done(function(giphyResponse) {

	      	// declare JSON output into a results variable for easier use
	      	let giphyResults = giphyResponse.data

	      	// console log the results
	      	console.log(giphyResults)

	      	// loop through results to parse out what we want to display from the api
	      	for (var i = 0; i < giphyResults.length; i++) {

	      		var gifImage = $('<img>')
	      		gifImage.attr("src", giphyResults[i].images.fixed_height.url);

	      	}


	      });
	},

	termButtonClicked: () => {
		$("body").on("click", ".next-term-button", function() {
			searchWord = $(this).text();

			controller.searchGiphy();
		});
	},


}; //end of controller object