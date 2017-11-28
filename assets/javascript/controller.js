// This is where all the javascript will
// live for the project that connects the view and model



// Controller Object for all of our Controller Functions
var controller = {

	// variables to use within the controller object

	startBadLibButtonClicked: () => {
		$("#start-badlib-button").click( function (event) {
			event.preventDefault()
			authorName = $('#author-input').val().trim()
			if (authorName == "") {
				authorName = "An Author has no name"
			}
			console.log(authorName)
			controller.selectRandomBadLib()
			controller.loopTermsToSearchForInput()
		});
	},

	termButtonClicked: () => {
		$(".input-term-button").click(function (event) {
			event.preventDefault()
			searchWord = $('#word-input').val().trim()
			if ( searchWord == "" ) {
				searchWord = "blank"
				randomBadLib[badLibIndex].searchedTerms[0].term.push(searchWord)
				var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
		        searchWord + "&api_key=oXTcsygddx6gGqHTrnCdyGto2t9XZfy6&rating=pg-13&limit=12"
		      	console.log("term: " + randomBadLib[badLibIndex].searchedTerms[0].term)
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
					var randomGif = giphyResults[Math.floor(Math.random() * giphyResults.length)]
					randomBadLib[badLibIndex].searchedTerms[0].gif.push(randomGif)
					console.log(randomBadLib[badLibIndex].searchedTerms[0].gif)
					controller.loopTermsToSearchForInput()
		      	})	
			} else {
				// push the searchWord into the term array with the choosen badLibs object for the current sentence
				randomBadLib[badLibIndex].searchedTerms[0].term.push(searchWord)
				var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
		        searchWord + "&api_key=oXTcsygddx6gGqHTrnCdyGto2t9XZfy6&rating=pg-13&limit=12"
		      	console.log("term: " + randomBadLib[badLibIndex].searchedTerms[0].term)
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
					var randomGif = giphyResults[Math.floor(Math.random() * giphyResults.length)]
					randomBadLib[badLibIndex].searchedTerms[0].gif.push(randomGif)
					console.log(randomBadLib[badLibIndex].searchedTerms[0].gif)
					controller.loopTermsToSearchForInput()
		      	})

			}
		});
	},
	// select a random BadLib when starting a game
	selectRandomBadLib: () => {
		chosenBadLib = badLibsArray[Math.floor(Math.random() * badLibsArray.length)]
		randomBadLib = chosenBadLib.badLib
		console.log(randomBadLib)

		for (var i = 0; i < randomBadLib.length; i++) {
			allTermsCounter = randomBadLib[i].termsToSearch.length + allTermsCounter
		}
		console.log("allTermsCounterTOTAL")
		console.log(allTermsCounter)
	},

	loopTermsToSearchForInput: () => {
		var searchTerms = randomBadLib[badLibIndex].termsToSearch
		console.log(searchTerms)

		if (searchTermCounter < searchTerms.length) {
			view.displayTermInputs(searchTerms[searchTermCounter])
		} else if (termCounter == allTermsCounter){
			view.displayBadLibHeader()
			view.displayBadLib()
		} else if (searchTermCounter >= searchTerms.length) {
			badLibIndex++
			searchTermCounter = 0
			controller.loopTermsToSearchForInput()
		}

	},

	textToSpeech: () => {
			responsiveVoice.speak($('#sentence').text(), "UK English Female", {rate: .8})
	},

	nextSentenceButtonClicked: () => {
		$(".next-sentence-button").click(function() {
			$('.bad-lib-display').empty()
			$('#sentence').empty()
			sentenceCounter++
			console.log("sentenceCounter: " + sentenceCounter)
			// searchTermCounter = 0
			view.displayBadLib()
		})
	},

	playGameAgainButtonClicked: () => {
		$(".play-again-button").click(function () {
			randomBadLib[badLibIndex].searchedTerms[0].gif = []
			randomBadLib[badLibIndex].searchedTerms[0].term = []
			sentenceCounter = 0
			badLibIndex = 0
			searchTermCounter = 0
			termCounter = 0
			allTermsCounter = 0
			searchTerms = 0
			randomBadLib = []
			$('#story-title').empty()
			$('#story-author').empty()
			$('.bad-lib-display').empty()
			$('#sentence').empty()
			$('.user-term-inputs').show()
			controller.selectRandomBadLib()
			controller.loopTermsToSearchForInput()
		});
	},

}; //end of controller object