// This is where all the javascript will
// live for the project that connects the view and model



// Controller Object for all of our Controller Functions
var controller = {

	// variables to use within the controller object

	termButtonClicked: () => {
		$("body").on("click", ".input-term-button", function () {

			event.preventDefault();

			searchWord = $('#word-input').val().trim();
			// push the searchWord into the term array with the choosen badLibs object for the current sentence
			randomBadLib[badLibIndex].searchedTerms[0].term.push(searchWord)
			var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
	        searchWord + "&api_key=oXTcsygddx6gGqHTrnCdyGto2t9XZfy6&rating=pg&limit=12"
      		console.log("term: " + randomBadLib[badLibIndex].searchedTerms[0].term);
	    	searchTermCounter++
	    	console.log("searchTermCounter: " + searchTermCounter)
	    	termCounter++
	    	console.log("termCounter: " + termCounter)


			$.ajax({
				url: queryURL,
				method: "GET"
			}).done(function (giphyResponse) {

				// declare JSON output into a results variable for easier use
				var giphyResults = giphyResponse.data

				// console log the results
				console.log(giphyResults)

				// var gifImage = $('<img>')
				var randomGif = giphyResults[Math.floor(Math.random() * giphyResults.length)]
				//console.log(randomGif);
				//gifImage.attr("src", randomGif.images.fixed_height.url);
				//$('#noun-01').html(gifImage);
				//gifImageSrc = $('#noun-01').attr('src')
				randomBadLib[badLibIndex].searchedTerms[0].gif.push(randomGif);
				//badLibs.badLibs1[0].searchedTerms[0].gif.push(giphyResults);
				console.log(randomBadLib[badLibIndex].searchedTerms[0].gif);
				// loop through results to parse out what we want to display from the api
				// for (var i = 0; i < giphyResults.length; i++) {

				// }
				controller.loopTermsToSearchForInput();
	      	})
		});
		
	},
	// select a random BadLib when starting a game
	selectRandomBadLib: () => {
		choosenBadLib = badLibsArray[Math.floor(Math.random() * badLibsArray.length)]
		randomBadLib = choosenBadLib.badLib
		console.log(randomBadLib);

		for (var i = 0; i < randomBadLib.length; i++) {
			allTermsCounter = randomBadLib[i].termsToSearch.length + allTermsCounter
		}
		console.log("allTermsCounterTOTAL")
		console.log(allTermsCounter)
	},

	loopTermsToSearchForInput: () => {
		var searchTerms = randomBadLib[badLibIndex].termsToSearch;
		console.log(searchTerms);

		
		if (searchTermCounter < searchTerms.length) {
			view.displayTermInputs(searchTerms[searchTermCounter]);
		} else if (termCounter == allTermsCounter){
			badLibIndex = 0;
			view.displayBadLib();
		} else if (searchTermCounter >= searchTerms.length) {
			badLibIndex++
			searchTermCounter = 0;
			controller.loopTermsToSearchForInput();
		}
		
		//for (var i = 0; i < searchTerms.length; i++) {
		//	console.log(searchTerms[i]);
			/*if (searchTermCounter % searchTerms.length) {
				var placeholderText = searchTerms[i];
				console.log(searchTerms[i])
				view.displayTermInputs(searchTerms[i]);
			}*/
		//}

	},

	textToSpeech: (text) => {
		responsiveVoice.speak(text, "US English Female", {rate: 1});
	}


}; //end of controller object