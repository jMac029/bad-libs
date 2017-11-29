// This is where all the data and global variables will 
// live for the project

// Global Variables

var searchWord
var counter = 0
var searchTermCounter = 0
var chosenBadLib
var randomBadLib
var badLibIndex = 0
var termCounter = 0
var allTermsCounter = 0
var sentenceCounter = 0
var authorName = ""
var searchTerms = 0


var badLibsArray = [ 

		{ title: "In The News",
		  badLib: [
			{
			sentence: "<div id='sentence'><span class='gif' id='term0' data='male-celebrity'></span> was arrested in <span class='gif' id='term1' data='state'></span> this morning after it was revealed that he <span class='gif' id='term2' data='verb-past-tense'></span> in front of <span class='gif' id='term3' data='landmark'></span> late last night.</div>",
			termsToSearch: ["male celebrity", "state", "past tense verb", "landmark or monument"],
			searchedTerms: [{ term: [], gif: []}]
			},
			{
			sentence: "<div id='sentence'> Sure he has a history of <span class='gif' id='term0' data='verb-ing'></span>, but no one, not even his <span class='gif' id='term1' data='family-member'></span> - ever imagined he would <span class='gif' id='term2' data='verb'></span> with a <span class='gif' id='term3' data='noun'></span> stuck in his <span class='gif' id='term4' data='body-part'></span>.</div>",
			termsToSearch: ["verb ending in -ing", "family member", "verb", "noun", "body part"],
			searchedTerms: [{ term: [], gif: []}]
			},
			{
			sentence: "<div id='sentence'>After stopping for a quick <span class='gif' id='term0' data='noun'></span>, cops followed him to a <span class='gif' id='term1' data='fast-food-restaurant'></span>, where he reportedly <span class='gif' id='term2' data='verb-past-tense'></span> in the deep fryer.</div>",
			termsToSearch: ["noun", "fast food restaurant", "past tense verb"],
			searchedTerms: [{ term: [], gif: []}]
			},
			{
			sentence: "<div id='sentence'>In <span class='gif' id='term0' data='year'></span>, a woman was charged with a similar crime when she <span class='gif' id='term1' data='verb-past-tense'></span> in front of the White House with a <span class='gif' id='term2' data='noun'></span> in her <span class='gif' id='term3' data='body-part'></span>.</div>",
			termsToSearch: ["year", "past tense verb", "noun", "body part"],
			searchedTerms: [{ term: [], gif: []}]
			},
			{
			sentence: "<div id='sentence'>Either way, he is going to need a <span class='gif' id='term0' data='adjective'></span> lawyer to get him out of this <span class='gif' id='term1' data='adjective'></span> situation.</div>",
			termsToSearch: ["adjective", "adjective"],
			searchedTerms: [{ term: [], gif: []}]
			}
        ]},

        { title: "Local News",
        badLib: [
          {
          sentence: "<div id='sentence'><span class='gif' id='term0' data='female-celebrity'></span> was arrested in <span class='gif' id='term1' data='state'></span> this morning after it was revealed that she <span class='gif' id='term2' data='verb-past-tense'></span> in front of <span class='gif' id='term3' data='landmark'></span> late last night.</div>",
          termsToSearch: ["female celebrity", "state", "past tense verb", "landmark or monument"],
          searchedTerms: [{ term: [], gif: []}]
          },
          {
          sentence: "<div id='sentence'> Sure she has a history of <span class='gif' id='term0' data='verb-ing'></span>, but no one, not even her <span class='gif' id='term1' data='family-member'></span> - ever imagined she would <span class='gif' id='term2' data='verb'></span> with a <span class='gif' id='term3' data='noun'></span> stuck in her <span class='gif' id='term4' data='body-part'></span>.</div>",
          termsToSearch: ["verb ending in -ing", "family member", "verb", "noun", "body part"],
          searchedTerms: [{ term: [], gif: []}]
          },
          {
          sentence: "<div id='sentence'>After stopping for a quick <span class='gif' id='term0' data='noun'></span>, police followed her to a <span class='gif' id='term1' data='fast-food-restaurant'></span>, where she reportedly <span class='gif' id='term2' data='verb-past-tense'></span> in the deep fryer.</div>",
          termsToSearch: ["noun", "fast food restaurant", "past tense verb"],
          searchedTerms: [{ term: [], gif: []}]
          },
          {
          sentence: "<div id='sentence'>In <span class='gif' id='term0' data='year'></span>, a woman was charged with a similar crime when she <span class='gif' id='term1' data='verb-past-tense'></span> in front of the White House with a <span class='gif' id='term2' data='noun'></span> in her <span class='gif' id='term3' data='body-part'></span>.</div>",
          termsToSearch: ["year", "past tense verb", "noun", "body part"],
          searchedTerms: [{ term: [], gif: []}]
          },
          {
          sentence: "<div id='sentence'>Either way, she is going to need a <span class='gif' id='term0' data='adjective'></span> lawyer to get her out of this <span class='gif' id='term1' data='adjective'></span> situation.</div>",
          termsToSearch: ["adjective", "adjective"],
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
			termsToSearch: ["verb ending in -ing", "adjective", "plural noun", "body part"],
			searchedTerms: [{ term: [], gif: []}]
			},
			{
			sentence: "<div id='sentence'><span class='gif' id='term0' data='animal-plural'></span> get to know one another by <span class='gif' id='term1' data='verb-ing'></span> through e-mail or talking on the <span class='gif' id='term2' data='noun'></span>.</div>",
			termsToSearch: ["animal plural", "verb ending in -ing", "noun"],
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
		]},

		{ title: "Afraid of the Dark",
            badLib: [
            {
            sentence: "<div id='sentence'>I was home alone and scared out of my <span class='gif' id='term0' data='plural-noun'></span>. I could hear the wind <span class='gif' id='term1' data='verb-ing'></span>, and off in the distance a <span class='gif' id='term2' data='noun'></span> was howling. </div>",
            termsToSearch: ["plural noun", "verb ending in -ing", "noun"],
            searchedTerms: [{ term: [], gif: []}]
            },
            {
            sentence: "<div id='sentence'>I crossed the room, locked the <span class='gif' id='term0' data='noun'></span>, and climbed into bed, pulling the <span class='gif' id='term1' data='plural-noun'></span> over my <span class='gif' id='term2' data='body-part'></span>. </div>",
            termsToSearch: ["noun", "plural noun", "body part"],
            searchedTerms: [{ term: [], gif: []}]
            },
            {
            sentence: "<div id='sentence'>My <span class='gif' id='term0' data='body-part'></span> started to chatter and my knees began <span class='gif' id='term1' data='verb-ing'></span>. The <span class='gif' id='term2' data='noun'></span> was thrust open and there was a huge <span class='gif' id='term3' data='noun'></span> with hair all over his <span class='gif' id='term4' data='body-part'></span> </div>",
            termsToSearch: ["body part", "verb ending in -ing", "noun", "noun", "body part"],
            searchedTerms: [{ term: [], gif: []}]
            },
            {
            sentence: "<div id='sentence'>It was my father. \"Hi, we\'re home,\" he said <span class='gif' id='term0' data='adverb'></span>. \"Hope you weren\'t afraid of staying home alone.\" \"No,\" I said, lying through my <span class='gif' id='term1' data='body-part'></span> </div>",
            termsToSearch: ["adverb", "body part"],
            searchedTerms: [{ term: [], gif: []}]
            }
        ]},

        { title: "Personal Ad",
            badLib: [
            {
            sentence: "<div id='sentence'>I enjoy long, <span class='gif' id='term0' data='adjective'></span> walks on the beach, getting <span class='gif' id='term1' data='verb-past-tense'></span> in the rain and serendipitous encounters with <span class='gif' id='term2' data='plural-noun'></span>.</div>",
            termsToSearch: ["adjective", "past tense verb", "plural noun"],
            searchedTerms: [{ term: [], gif: []}]
            },
            {
            sentence: "<div id='sentence'>I really like piña coladas mixed with <span class='gif' id='term0' data='beverage'></span>, and romantic, candle-lit <span class='gif' id='term1' data='plural-noun'></span>. I am well-read from Dr. Seuss to <span class='gif' id='term2' data='famous-person'></span>. </div>",
            termsToSearch: ["beverage", "plural noun", "famous person"],
            searchedTerms: [{ term: [], gif: []}]
            },
            {
            sentence: "<div id='sentence'> I travel frequently, especially to <span class='gif' id='term0' data='place'></span>, when I am not busy with work. (I am a <span class='gif' id='term1' data='occupation'></span>.) I am looking for <span class='gif' id='term2' data='noun'></span> and beauty in the form of a <span class='gif' id='term3' data='nationality'></span> goddess. </div>",
            termsToSearch: ["place", "occupation", "noun", "nationality"],
            searchedTerms: [{ term: [], gif: []}]
            },
            {
            sentence: "<div id='sentence'>She should have the physique of <span class='gif' id='term0' data='female-famous-person'></span> and the <span class='gif' id='term1' data='body-part'></span> of <span class='gif' id='term2' data='male-famous-person'></span>. I would prefer if she knew how to cook, clean, and wash my <span class='gif' id='term3' data='plural-noun'></span>. </div>",
            termsToSearch: ["female famous person", "body part", "male famous person", "plural noun"],
            searchedTerms: [{ term: [], gif: []}]
            },
            {
            sentence: "<div id='sentence'>I know I’m not very attractive in my picture, but it was taken in <span class='gif' id='term0' data='year'></span>, and I have since become more <span class='gif' id='term1' data='adjective'></span>. </div>",
            termsToSearch: ["year", "adjective"],
            searchedTerms: [{ term: [], gif: []}]
            }
        ]},

        { title: "Romeo and Juliet: Prologue",
            badLib: [
            {
            sentence: "<div id='sentence'>Two <span class='gif' id='term0' data='plural-noun'></span>, both alike in dignity, <br> In fair <span class='gif' id='term1' data='place'></span>, where we lay our scene, <br> From ancient <span class='gif' id='term2' data='noun'></span> break to new mutiny, <br> Where civil blood makes civil hands unclean.</div>",
            termsToSearch: ["plural noun", "place", "noun"],
            searchedTerms: [{ term: [], gif: []}]
            },
            {
            sentence: "<div id='sentence'>From forth the fatal loins of these two foes <br> A pair of star-cross`d <span class='gif' id='term0' data='plural-noun'></span> take their life; <br> Whole misadventured piteous overthrows <br> Do with their <span class='gif' id='term1' data='noun'></span> bury their parents` strife.</div>",
            termsToSearch: ["plural noun", "noun"],
            searchedTerms: [{ term: [], gif: []}]
            },
            {
            sentence: "<div id='sentence'>The fearful passage of their <span class='gif' id='term0' data='adjective'></span> love, <br> And the continuance of their parents` rage, <br> Which, but their children`s end, nought could <span class='gif' id='term1' data='verb'></span>, <br> Is now the <span class='gif' id='term2' data='number'></span> hours` traffic of our stage;</div>",
            termsToSearch: ["adjective", "verb", "number"],
            searchedTerms: [{ term: [], gif: []}]
            },
            {
            sentence: "<div id='sentence'>The which if you with <span class='gif' id='term0' data='adjective'></span> <span class='gif' id='term1' data='body-part'></span> attend, <br> What here shall <span class='gif' id='term2' data='verb'></span>, our toil shall strive to mend.</div>",
            termsToSearch: ["adjective", "body part", "verb"],
            searchedTerms: [{ term: [], gif: []}]
            }
        ]},

        { title: "The Latest Dance Craze",
        badLib: [
          {
          sentence: "<div id='sentence'>Have you heard about the <span class='gif' id='term0' data='adjective'></span> dance craze sweeping (the) <span class='gif' id='term1' data='place'></span>? It's called The <span class='gif' id='term2' data='person-in-room'></span>!</div>",
          termsToSearch: ["adjective", "place", "person in room"],
          searchedTerms: [{ term: [], gif: []}]
          },
          {
          sentence: "<div id='sentence'> Slip on your <span class='gif' id='term0' data='verb-ing'></span> shoes, turn up the speakers on your i-<span class='gif' id='term1' data='noun'></span>, and let's master the moves that put this <span class='gif' id='term2' data='adjective'></span> dance on the map: </div>",
          termsToSearch: ["verb ending in -ing", "noun", "adjective"],
          searchedTerms: [{ term: [], gif: []}]
          },
          {
          sentence: "<div id='sentence'>Put your hands on your <span class='gif' id='term0' data='body-part-plural'></span>, stomp your <span class='gif' id='term1' data='body-part'></span>, and strike a <span class='gif' id='term2' data='adjective'></span> pose.</div>",
          termsToSearch: ["body part plural", "body part", "adjective"],
          searchedTerms: [{ term: [], gif: []}]
          },
          {
          sentence: "<div id='sentence'>Take <span class='gif' id='term0' data='number'></span> <span class='gif' id='term1' data='adjective'></span> steps to the left, spin <span class='gif' id='term2' data='adverb'></span>, then take <span class='gif' id='term3' data='number'></span> <span class='gif' id='term4' data='adjective'></span> steps to the right. </div>",
          termsToSearch: ["number", "adjective", "adverb", "number", "adjective"],
          searchedTerms: [{ term: [], gif: []}]
          },
          {
          sentence: "<div id='sentence'>Throw your <span class='gif' id='term0' data='body-part'></span> into the air and sway your <span class='gif' id='term1' data='plural-noun'></span> from side to side.</div>",
          termsToSearch: ["body part", "plural noun"],
          searchedTerms: [{ term: [], gif: []}]
          },
          {
          sentence: "<div id='sentence'>For the big finish, stick out your <span class='gif' id='term0' data='body-part'></span> and wiggle it <span class='gif' id='term1' data='adverb'>.</div>",
          termsToSearch: ["body part", "adverb"],
          searchedTerms: [{ term: [], gif: []}]
          },
          {
          sentence: "<div id='sentence'>Repeat all of these <span class='gif' id='term0' data='adjective'></span> steps until the song is over.</div>",
          termsToSearch: ["adjective"],
          searchedTerms: [{ term: [], gif: []}]
          }
       ]},
  
        { title: "Late Nite TV Ad",
            badLib: [
            {
            sentence: "<div id='sentence'>Is your <span class='gif' id='term0' data='noun'></span> making a mess of your <span class='gif' id='term1' data='place'></span>? Try <span class='gif' id='term2' data='silly-word'></span>! It will <span class='gif' id='term3' data='verb'></span> your whole <span class='gif' id='term4' data='noun'></span> and <span class='gif' id='term5' data='verb'></span> to unbelievable levels!</div>",
            termsToSearch: ["noun", "place", "silly word", "verb", "noun", "verb"],
            searchedTerms: [{ term: [], gif: []}]
            },
            {
            sentence: "<div id='sentence'>Watch, as we demonstrate, the <span class='gif' id='term0' data='adjective'></span> capabilities of this <span class='gif' id='term1' data='adverb'></span> product! Everyone should have at least <span class='gif' id='term2' data='number'></span> of these!</div>",
            termsToSearch: ["adjective", "adverb", "number"],
            searchedTerms: [{ term: [], gif: []}]
            },
            {
            sentence: "<div id='sentence'>To order, call the number on your screen. <span class='gif' id='term0' data='adjective'></span> phone attendants will <span class='gif' id='term1' data='adverb'></span> take your request. <span class='gif' id='term2' data='adjective'></span> and <span class='gif' id='term3' data='adjective'></span> service will be yours!</div>",
            termsToSearch: ["adjective", "adverb", "adjective", "adjective"],
            searchedTerms: [{ term: [], gif: []}]
            },
            {
            sentence: "<div id='sentence'>Call within the next <span class='gif' id='term0' data='number'></span> <span class='gif' id='term1' data='time'></span>, and you will receive a <span class='gif' id='term2' data='adjective'></span>, <span class='gif' id='term3' data='adjective'></span>, <span class='gif' id='term4' data='adverb'></span> <span class='gif' id='term5' data='noun'></span> as a bonus, absolutely free for an additional value of <span class='gif' id='term6' data='number'></span> dollars, plus shipping and handling cost of <span class='gif' id='term7' data='number'></span> dollars. Act Now!!</div>",
            termsToSearch: ["number", "measurement of time (minutes, seconds, hours, etc.)", "adjective", "adjective", "adverb", "noun", "number", "number"],
            searchedTerms: [{ term: [], gif: []}]
            }
        ]}

];


