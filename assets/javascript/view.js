// This is where most of the JS & jQuery will live
 // for the project that will manipulate our webpage

 // On Page Load
$(document).ready(function(){

	// input whatever needs to happen when the page loads
	view.displayWelcomeScreen();
	//controller.startBadLibButtonClicked();
	//controller.termButtonClicked();
	//controller.nextSentenceButtonClicked();
	//controller.selectRandomBadLib();
	//controller.loopTermsToSearchForInput();
	//console.log("badLibsArray: " + badLibsArray);
	//console.log(badLibs.badLibs1[0].searchedTerms[0].term);
	//view.displayTermInputs();

});

// view object for manipulation of the view with JS and jQuery
var view = {

	displayWelcomeScreen: () => {
		var welcomeScreenHtml = 
			"<div class='cell medium-10 text-center'>" +
	                "<div class='cell small-6 float-center' style='margin: 50px 0 50px 0'>" +
	                  "<label>Who is this?</label>" +
	                  "<input type='text' class='cell small-6 float-center' id='author-input' placeholder='type in your name'/>" +
	                "</div>" +
	              "<input class='button large secondary' type='submit' id='start-badlib-button' value='Start Your Story'>" +
	            "</div>" +
          	"</div>"
        $('.welcome-screen').append(welcomeScreenHtml);
        controller.startBadLibButtonClicked();

	},

	displayTermInputs: (term) => {
		// var inputForm = $('<form>').addClass('user-inputs')
		var wordCounter = termCounter + 1
		var inputHtml = 
			"<div class='cell medium-10 text-center'>" +
            	"<div class='cell small-6 float-center' style='margin: 50px 0 50px 0'>" +
				"<label for='word-input'>" + term + "</label>" +
				"<input type='text' class='cell small-6 float-center' id='word-input'>" +
				"</div>" +
				"<!-- Submit Button -->" +
				"<input class='input-term-button button large primary' type='submit' value='Submit " + term + "'>" +
				"<p id='counter'> word " + wordCounter + " of " + allTermsCounter + "</p>" +
			"</div>"

	    $('.welcome-screen').hide()
	    $('.user-term-inputs').empty()
	    $('.user-term-inputs').append(inputHtml)
	    controller.termButtonClicked();
	    // searchTermCounter++
	},

	displayBadLibHeader: () => {
		var badLibTitle = "<h1>" + chosenBadLib.title + "</h1>"
		var badLibAuthor = "<h3> by " + authorName + "</h3>"
		$('.story-display').prepend(badLibTitle, badLibAuthor);
	},

	displayBadLib: () => {
		$('.user-term-inputs').hide()
		var badLibSentence = randomBadLib[badLibIndex].sentence
		var badLibSpeechSentence = randomBadLib[badLibIndex].speechSentence
		// var termsToSearch = badLibs.badLibs1[0].termsToSearch
		var gifs = randomBadLib[badLibIndex].searchedTerms[0].gif
		var terms = randomBadLib[badLibIndex].searchedTerms[0].term
		console.log(gifs)
		// searchTermCounter--
		var nextSentenceButton = "<input class='next-sentence-button' type='submit' value='next Sentence in Bad Lib'>"
		var allDone = "<input class='all-done-button' type='submit' value='all done Bad Lib'>"
		$('.bad-lib-display').append(badLibSentence);
		if (badLibIndex <= randomBadLib.length) {
			$('#sentence').append(nextSentenceButton)
		} else if ( badLibIndex > randomBadLib.length) {
			$('#sentence').append(allDone)
		}
		//responsiveVoice.setDefaultVoice("US English Female");
		//responsiveVoice.speak($('#sentence').text(), "US English Female", {rate: .5});
		controller.textToSpeech($('#sentence').text())
		controller.nextSentenceButtonClicked();
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