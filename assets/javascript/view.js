// This is where most of the JS & jQuery will live
 // for the project that will manipulate our webpage

 // On Page Load
$(document).ready(function(){

	view.displayWelcomeScreen()
	
});

// view object for manipulation of the view with JS and jQuery
var view = {

	displayWelcomeScreen: () => {
		var welcomeScreenHtml = 
			"<div class='cell medium-10 text-center'>" +
				"<form>" +
	                "<div class='cell small-6 float-center'>" +
	                  "<label for='author-input' id='author-question'>What is your name?</label>" +
	                  "<input type='text' class='cell small-6 float-center' id='author-input' autofocus/>" +
	                "</div>" +
	              	"<button class='clear button' id='start-badlib-button'>Begin Your Story</button>" +
	            "<form>" +
	        "</div>"
	    $('input').focus()
        $('.welcome-screen').append(welcomeScreenHtml)
        controller.startBadLibButtonClicked()

	},

	displayTermInputs: (term) => {
		// var inputForm = $('<form>').addClass('user-inputs')
		var wordCounter = termCounter + 1
		var inputHtml = 
			"<div class='cell medium-10 text-center'>" +
			"<form>" +
            	"<div class='cell small-6 float-center'>" +
				"<label for='word-input' id='word-question' >WORD " + wordCounter + " OF " + allTermsCounter + "</label>" +
				"<label for='word-input' id='term-question'>" + term + "</label>" +
				"<input type='text' class='cell small-6 float-center' id='word-input' autofocus/>" +
				"</div>" +
				"<!-- Submit Button -->" +
				"<button class='input-term-button clear button'>enter</button>" +
				//"<p id='counter'> word " + wordCounter + " of " + allTermsCounter + "</p>" +
			"</form>" +
			"</div>"
	    $('.welcome-screen').hide()
	    $('.user-term-inputs').empty()
	    $('.user-term-inputs').append(inputHtml)
	    $('input').focus()
	    controller.termButtonClicked()
	    // searchTermCounter++
	},

	displayBadLibHeader: () => {
		var badLibTitle = "<h1 id='story-title'>" + chosenBadLib.title + "</h1>"
		var badLibAuthor = "<h3 id='story-author'> by " + authorName + "</h3>"
		$('.story-display').prepend(badLibTitle, badLibAuthor)
	},

	displayBadLib: () => {
		console.log("sentenceCounter: " + sentenceCounter)
		$('.user-term-inputs').hide()
		var badLibSentence = randomBadLib[sentenceCounter].sentence
		console.log("badLibSentence: " + badLibSentence)

		var gifs = randomBadLib[sentenceCounter].searchedTerms[0].gif
		var terms = randomBadLib[sentenceCounter].searchedTerms[0].term
		console.log("gifs: " + gifs)
		console.log("terms: " + terms)
		var nextSentenceButton = "<div class='cell small-6 float-center'><button class='clear button next-sentence-button'>next Sentence in Bad Lib</button></div>"
		var playGameAgain = "<div class='cell small-6 float-center'><button class='clear button play-again-button'>Play Again?</button></div>"
		$('.bad-lib-display').append(badLibSentence);
		if ( sentenceCounter < randomBadLib.length-1 ) {
			$('.bad-lib-display').append(nextSentenceButton)
			controller.nextSentenceButtonClicked()
		} 
		if ( sentenceCounter === randomBadLib.length-1 ) {
			$('.bad-lib-display').append(playGameAgain)
			controller.playGameAgainButtonClicked()
		}
		for (var i = 0; i < gifs.length; i++) {
			var gifImage = $('<img>')
			gifImage.attr("src", gifs[i].images.fixed_height.url)
			gifImage.attr("title", terms[i])
			//gifImage.text(terms[i]);
			gifImage.prepend(terms[i])
			$('#term'+i).html(gifImage)
		} return controller.textToSpeech()
		
	}


}