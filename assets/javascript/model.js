// This is where all the data and global variables will 
// live for the project

// Global Variables

 var searchWord;
 var counter = 0;
 var searchTermCounter = 0;
 var randomBadLib;
 var badLibIndex = 0;
 var allTermsCounter = 0;
 var authorName;
 var searchTerms = 0;

//Creating a variable for each sentence in the Mad Lib
 var sentence01 = "A <span id='noun-01'></span> in Kentucky was arrested this morning after he <span id='verb-01'></span> in front of a house." 


 /*(Proper noun) had a history of (verb), but no one - not even his (noun) - ever imagined he’d (verb) with a (noun) stuck in his (body part). 
 \'I always thought he was (adjective), but i never thought he’d do something like this. Even his (relative) was surprised.'\ 
 After a brief (activity), cops followed him to a (fast food restaurant), where he reportedly (adjective, past tense) in the fry machine. 
 In (month), a woman was charged with a similar crime. 
 But rather than (verb), a with a (noun), she (verb, past tense) with a (adjective) dog. 
 Either way, we imagine that after witnessing him (verb) with a (noun) there are probably a whole lot of (plural noun) that are going to need some therapy.*/


var badLibsArray = [ 

		{ title: "In The News",
		  badLib: [
			{
			sentence: "<div id='sentence'>A <span class='gif' id='term0' data='animal'></span> in Kentucky was arrested this morning after he <span class='gif' id='term1' data='verb'></span> in front of a house.</div>",
			termsToSearch: ["animal", "verb"],
			searchedTerms: [{ term: [], gif: []}]
			},
			{
			sentence: "<div id='sentence'> <span class='gif' id='term0' data='celebrity'></span>had a history of <span class='gif' id='term1' data='verb'></span>, but no one - not even his/hers <span class='gif' id='term2' data='noun'></span> - ever imagined he/she had <span class='gif' id='term3' data='verb'></span> with a <span class='gif' id='term4' data='noun'></span> stuck in his/hers <span class='gif' id='term5' data='body-part'></span>.</div>",
			termsToSearch: ["celebrity", "verb", "noun", "verb", "noun", "body part"],
			searchedTerms: [{ term: [], gif: []}]
			},
			{
			sentence: "<div id='sentence'>I always thought he/she was <span class='gif' id='term0' data='adjective'></span>, but I never thought he/she would do something like this. Even his/her <span class='gif' id='term1' data='family-member'></span> was surprised.</div>",
			termsToSearch: ["adjective", "family-member"],
			searchedTerms: [{ term: [], gif: []}]
			},
			{
			sentence: "<div id='sentence'>After a brief <span class='gif' id='term0' data='activity'></span>, cops followed him/her to a <span class='gif' id='term1' data='fast-food-restaurant'></span>, where he/she reportedly <span class='gif' id='term2' data='adjective-past-tense'></span> in the fry machine.</div>",
			termsToSearch: ["activity", "fast food restaurant", "past tense adjective"],
			searchedTerms: [{ term: [], gif: []}]
			},
			{
			sentence: "<div id='sentence'>In <span class='gif' id='term0' data='month'></span>, a woman was charged with a similar crime. But rather than <span class='gif' id='term1' data='verb'></span>, a with a <span class='gif' id='term2' data='noun'></span>, she <span class='gif' id='term3' data='verb-past-tense'></span> with a <span class='gif' id='term4' data='adjective'></span> dog.</div>",
			termsToSearch: ["month", "verb", "noun", "past tense verb", "adjective"],
			searchedTerms: [{ term: [], gif: []}]
			},
			{
			sentence: "<div id='sentence'>Either way, we imagine that after witnessing him <span class='gif' id='term0' data='verb'></span> with a <span class='gif' id='term1' data='noun'></span> there are probably a whole lot of <span class='gif' id='term2' data='plural-noun'></span> that are going to need some therapy.</div>",
			termsToSearch: ["verb", "noun", "plural noun"],
			searchedTerms: [{ term: [], gif: []}]
			}
		]},

		{ title: "Online Dating",
			badLib: [
			{
			sentence: "<div id='sentence'>It may seem strange to look for a <span class='gif' id='term0' data='adjective'></span> soulmate or future <span class='gif' id='term1' data='noun'></span> on the Internet, but online dating has become one of the most <span class='gif' id='term2' data='adjective'></span> activities on the World Wide <span class='gif' id='term3' data='noun'></span>. </div>",
			termsToSearch: ["adjective", "noun", "adjective", "noun"],
			searchedTerms: [{ term: [], gif: []}]
			},
			{
			sentence: "<div id='sentence'> Online <span class='gif' id='term0' data='verb-ing'></span> provides a <span class='gif' id='term1' data='adjective'></span> way to connect with <span class='gif' id='term2' data='plural-noun'></span> without a face-to-<span class='gif' id='term3' data='body-part'></span> meeting.</div>",
			termsToSearch: ["celebrity", "verb ending in -ing", "adjective", "plural noun", "body part"],
			searchedTerms: [{ term: [], gif: []}]
			},
			{
			sentence: "<div id='sentence'><span class='gif' id='term0' data='animal'></span> get to know one another by <span class='gif' id='term1' data='verb-ing'></span> through e-mail or talking on the <span class='gif' id='term2' data='noun'></span>.</div>",
			termsToSearch: ["animal", "verb ending in -ing", "noun"],
			searchedTerms: [{ term: [], gif: []}]
			},
			{
			sentence: "<div id='sentence'>If you try online <span class='gif' id='term0' data='verb-ing'></span> and decide to meet someone in person, make sure it's in a <span class='gif' id='term1' data='adjective'></span> place, and let a friend know the <span class='gif' id='term2' data='verb-ing'></span> location.</div>",
			termsToSearch: ["verb ending in -ing", "adjective", "adjective"],
			searchedTerms: [{ term: [], gif: []}]
			},
			{
			sentence: "<div id='sentence'>This is also a great way for shy <span class='gif' id='term0' data='plural-noun'></span> to meet. And remember, if the first introduction doesn't work out, there are many more profiles all over the <span class='gif' id='term1' data='noun'></span>. </div>",
			termsToSearch: ["plural noun", "noun"],
			searchedTerms: [{ term: [], gif: []}]
			}
		]}


];


