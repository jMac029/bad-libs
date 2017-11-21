// This is where most of the JS & jQuery will live
 // for the project that will manipulate our webpage

 // On Page Load
$(document).ready(function(){

	// input whatever needs to happen when the page loads
	controller.termButtonClicked();
	controller.selectRandomBadLib();
	controller.loopTermsToSearchForInput();
	console.log("badLibsArray: " + badLibsArray);
	//console.log(badLibs.badLibs1[0].searchedTerms[0].term);
	//view.displayTermInputs();

});

// view object for manipulation of the view with JS and jQuery
var view = {

	displayTermInputs: (term) => {
		var inputForm = $('<form>').addClass('user-inputs')
		var inputHtml = "<label for='term-input'>Enter a " + term + "</label>" +
						"<input type='text' id='word-input'>" +
						"<!-- Submit Button -->" +
	    				"<input class='input-term-button' type='submit' value='Submit " + term + "'>"

	    $('.user-term-inputs').empty()
	    inputForm.html(inputHtml)
	    $('.user-term-inputs').append(inputForm)
	    // searchTermCounter++
	},

	displayBadLib: () => {
		$('.user-term-inputs').hide()
		var badLibSentence = randomBadLib[badLibIndex].sentence
		var badLibSpeechSentence = randomBadLib[badLibIndex].speechSentence
		// var termsToSearch = badLibs.badLibs1[0].termsToSearch
		var gifs = randomBadLib[badLibIndex].searchedTerms[0].gif
		var terms = randomBadLib[badLibIndex].searchedTerms[0].term
		console.log("gifs: " + gifs)
		// searchTermCounter--
		var nextSentenceButton = "<button class='next-sentence-button' value='next Sentence in Bad Lib'</button>"
		$('.bad-lib-display').append(badLibSentence);
		$('.bad-lib-display').append(nextSentenceButton)
		//responsiveVoice.setDefaultVoice("US English Female");
		//responsiveVoice.speak($('#sentence').text(), "US English Female", {rate: .5});
		controller.textToSpeech($('#sentence').text())
		for (var i = 0; i < gifs.length; i++) {
			console.log(i)
			var gifImage = $('<img>');
			//$('.term').attr('id', 'term'+i);
			gifImage.attr("src", gifs[i].images.fixed_height.url);
			gifImage.attr("title", terms[i]);
			gifImage.prepend(terms[i]);
			$('#term'+i).html(gifImage);
			//console.log(term)
			//$('.bad-lib-display').append(gifImage);
			//console.log(gifImage)
			//$('.bad-lib-display').html(badLibSentence);
		}
		
	}


}