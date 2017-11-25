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
				"<form>" +
	                "<div class='cell small-6 float-center'>" +
	                  "<label for='author-input'>what is your name?</label>" +
	                  "<input type='text' class='cell small-6 float-center' id='author-input' autofocus/>" +
	                "</div>" +
	              	"<button class='hollow button' id='start-badlib-button'>Begin Your Story</button>" +
	            "<form>" +
	        "</div>"
	    $('input').focus();
        $('.welcome-screen').append(welcomeScreenHtml);
        controller.startBadLibButtonClicked();

	},

	displayTermInputs: (term) => {
		// var inputForm = $('<form>').addClass('user-inputs')
		var wordCounter = termCounter + 1
		var inputHtml = 
			"<div class='cell medium-10 text-center'>" +
			"<form>" +
            	"<div class='cell small-6 float-center'>" +
				"<label for='word-input'>word " + wordCounter + " of " + allTermsCounter + "</label>" +
				"<label for='word-input'>" + term + "</label>" +
				"<input type='text' class='cell small-6 float-center' id='word-input' autofocus/>" +
				"</div>" +
				"<!-- Submit Button -->" +
				"<button class='input-term-button hollow button'>enter</button>" +
				//"<p id='counter'> word " + wordCounter + " of " + allTermsCounter + "</p>" +
			"</form>" +
			"</div>"
	    $('.welcome-screen').hide()
	    $('.user-term-inputs').empty()
	    $('.user-term-inputs').append(inputHtml)
	    $('input').focus();
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

		// var termsToSearch = badLibs.badLibs1[0].termsToSearch
		var gifs = randomBadLib[badLibIndex].searchedTerms[0].gif
		var terms = randomBadLib[badLibIndex].searchedTerms[0].term
		console.log(gifs)
		// searchTermCounter--
		var nextSentenceButton = "<div class='cell small-6 float-center'><button class='hollow button next-sentence-button'>next Sentence in Bad Lib</button></div>"
		var allDone = "<div class='cell small-6 float-center'><button class='hollow button all-done-button'>all done</button></div>"
		$('.bad-lib-display').append(badLibSentence);
		if ( badLibIndex < randomBadLib.length ) {
			$('.bad-lib-display').append(nextSentenceButton)
		} 
		// still working on getting this to work
		if ( badLibIndex === randomBadLib.length ) {
			$('.bad-lib-display').append(allDone)
		}
		//var speechSentence = $('#sentence').text()
		//console.log(speechSentence)
		//responsiveVoice.setDefaultVoice("US English Female");
		//responsiveVoice.speak($('#sentence').text(), "US English Female", {rate: .5});
		controller.nextSentenceButtonClicked();
		// controller.textToSpeech();
		for (var i = 0; i < gifs.length; i++) {
			var gifImage = $('<img>');
			gifImage.attr("src", gifs[i].images.fixed_height.url);
			gifImage.attr("title", terms[i]);
			//gifImage.text(terms[i]);
			gifImage.prepend(terms[i]);
			$('#term'+i).html(gifImage);
		} return controller.textToSpeech()
		
	}


}