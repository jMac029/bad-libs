// This is where all the data and global variables will 
// live for the project

// Global Variables

 var searchWord;
 var counter = 0;
 var searchTermCounter = 0;

//Creating a variable for each sentence in the Mad Lib
 var sentence01 = "A <span id='noun-01'></span> in Kentucky was arrested this morning after he <span id='verb-01'></span> in front of a house." 


 /*(Proper noun) had a history of (verb), but no one - not even his (noun) - ever imagined he’d (verb) with a (noun) stuck in his (body part). 
 \'I always thought he was (adjective), but i never thought he’d do something like this. Even his (relative) was surprised.'\ 
 After a brief (activity), cops followed him to a (fast food restaurant), where he reportedly (adjective, past tense) in the fry machine. 
 In (month), a woman was charged with a similar crime. 
 But rather than (verb), a with a (noun), she (verb, past tense) with a (adjective) dog. 
 Either way, we imagine that after witnessing him (verb) with a (noun) there are probably a whole lot of (plural noun) that are going to need some therapy.*/


var badLibs = {

		badLibs1: [
			{
			sentence: "<div id='sentence'> <span class='term0' id='celebrity'></span>had a history of <span class='term1' id='verb'></span>, but no one - not even his <span class='term2' id='noun'></span> - ever imagined he/she had <span class='term3' id='verb'></span> with a <span class='term4' id='noun'></span> stuck in his <span class='term5' id='body-part'></span>.</div>",
			termsToSearch: ["celebrity", "verb", "noun", "verb", "noun", "body part"],
			searchedTerms: [{ term: [], gif: []}]
			},
			{
			sentence: "I always thought he was <span class='term' id='adjective'></span>, but i never thought he’d do something like this. Even his <span class='term' id='family-member'></span> was surprised.",
			termsToSearch: ["adjective", "family-member"],
			searchedTerms: [{ term: [], gif: []}]
			},
			{
			sentence: "After a brief <span class='term' id='activity'></span>, cops followed him to a <span class='term' id='fast-food-restaurant'></span>, where he reportedly <span class='term' id='adjective-past-tense'></span> in the fry machine.",
			termsToSearch: ["activity", "fast food restaurant", "past tense adjective"],
			searchedTerms: [{ term: [], gif: []}]
			},
			{
			sentence: "In <span class='term' id='month'></span>, a woman was charged with a similar crime. But rather than <span class='term' id='verb'></span>, a with a <span class='term' id='noun'></span>, she <span class='term' id='verb-past-tense'></span> with a <span class='term' id='adjective'></span> dog.",
			termsToSearch: ["month", "verb", "noun", "past tense verb", "adjective"],
			searchedTerms: [{ term: [], gif: []}]
			},
			{
			sentence: "Either way, we imagine that after witnessing him <span class='term' id='verb'></span> with a <span class='term' id='noun'></span> there are probably a whole lot of <span class='term' id='plural-noun'></span> that are going to need some therapy.",
			termsToSearch: ["verb", "noun", "plural noun"],
			searchedTerms: [{ term: [], gif: []}]
			}
		],
		badLibs2: [
			{
			sentence: "<span class='term' id='celeberity'></span> had a history of <span class='term' id='verb'></span>, but no one - not even his <span class='term' id='noun'></span> - ever imagined he’d <span class='term' id='verb'></span> with a <span class='term' id='noun'></span> stuck in his <span class='term' id='body-part'></span>.",
			termsToSearch: ["celeberity", "verb", "noun", "verb", "noun", "body part"],
			searchedTerms: [{ term: [], gif: []}]
			},
			{
			sentence: "I always thought he was <span class='term' id='adjective'></span>, but i never thought he’d do something like this. Even his <span class='term' id='family-member'></span> was surprised.",
			termsToSearch: ["adjective", "family-member"],
			searchedTerms: [{ term: [], gif: []}]
			},
			{
			sentence: "After a brief <span class='term' id='activity'></span>, cops followed him to a <span class='term' id='fast-food-restaurant'></span>, where he reportedly <span class='term' id='adjective-past-tense'></span> in the fry machine.",
			termsToSearch: ["activity", "fast food restaurant", "past tense adjective"],
			searchedTerms: [{ term: [], gif: []}]
			},
			{
			sentence: "In <span class='term' id='month'></span>, a woman was charged with a similar crime. But rather than <span class='term' id='verb'></span>, a with a <span class='term' id='noun'></span>, she <span class='term' id='verb-past-tense'></span> with a <span class='term' id='adjective'></span> dog.",
			termsToSearch: ["month", "verb", "noun", "past tense verb", "adjective"],
			searchedTerms: [{ term: [], gif: []}]
			},
			{
			sentence: "Either way, we imagine that after witnessing him <span class='term' id='verb'></span> with a <span class='term' id='noun'></span> there are probably a whole lot of <span class='term' id='plural-noun'></span> that are going to need some therapy.",
			termsToSearch: ["verb", "noun", "plural noun"],
			searchedTerms: [{ term: [], gif: []}]
			}
		],
}
