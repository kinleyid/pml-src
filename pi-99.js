
var pi_99 = (
	function() {
		var likert_labels = [
			"Strongly disagree",
			"Disagree",
			"Slightly disagree",
			"Slightly agree",
			"Agree",
			"Strongly agree"
		];
		var survey_info = {
			instr: {
				page_1: 
					"Below are very general statements about the world; not the world " +
					"we wish we lived in, but the actual world as it is now. Please share your " +
					"sense of agreement or disagreement. When in doubt, go with what " +
					"initially feels true of the real world. There are no wrong " +
					"answers. There's no need to overthink.",
				page_2: 
					"Good work!" +
					"Remember, when in doubt, go with what initially feels most accurate to " +
					"the real world. You can be totally honest.",
				page_3:
					"You are doing great. Keep up the good work!"
			},
			questions: jsPsych.randomization.shuffle([
				{name: "at1", 	labels: likert_labels, prompt: "Please mark this statement 'slightly disagree.'"},
				{name: "at2", 	labels: likert_labels, prompt: "If you are doing your best to complete this survey honestly, please strongly agree with this statement."},
				{name: "at3", 	labels: likert_labels, prompt: "Please slightly agree with this statement."},
				{name: "ab1",	labels: likert_labels, prompt: "The world is an abundant place."},
				{name: "ab2x",	labels: likert_labels, prompt: "The world feels like a barren place with few opportunities."},
				{name: "ab3",	labels: likert_labels, prompt: "Life overflows with opportunity and abundance."},
				{name: "ab4",	labels: likert_labels, prompt: "The world is an abundant place with tons and tons to offer."},
				{name: "au1x",	labels: likert_labels, prompt: "The world needs to be continually improved rather than accepted."},
				{name: "au2x",	labels: likert_labels, prompt: "Most situations in life need to be improved, not accepted."},
				{name: "au3x",	labels: likert_labels, prompt: "Rather than accepting things as they are, the world needs to be improved as much as possible."},
				{name: "au4",	labels: likert_labels, prompt: "It's usually better to accept a situation than try to change it."},
				{name: "bu1x",	labels: likert_labels, prompt: "Though some things are incredibly beautiful, they're few and far between."},
				{name: "bu2",	labels: likert_labels, prompt: "Nearly everything in the world is beautiful."},
				{name: "bu3",	labels: likert_labels, prompt: "In life, there's way more beauty than ugliness."},
				{name: "bu4",	labels: likert_labels, prompt: "There is beauty everywhere, no matter where we look."},
				{name: "cs1",	labels: likert_labels, prompt: "Everything feels like it's shifting and changing."},
				{name: "cs2",	labels: likert_labels, prompt: "I feel like everything changes all the time."},
				{name: "cs3",	labels: likert_labels, prompt: "Everything feels like a whirl of constant change."},
				{name: "cs4x",	labels: likert_labels, prompt: "The world is a place where most things stay pretty much the same."},
				{name: "cs5",	labels: likert_labels, prompt: "Everything feels like it's constantly moving, changing, and up in the air."},
				{name: "cc1x",	labels: likert_labels, prompt: "Instead of being cooperative, life is a brutal contest where you got to do whatever it takes to survive."},
				{name: "cc2x",	labels: likert_labels, prompt: "For all life—from the smallest organisms, to plants, animals, and for people too—everything is a cut-throat competition."},
				{name: "cc3x",	labels: likert_labels, prompt: "Instead of being cooperative, the world is a cutthroat and competitive place."},
				{name: "cc4",	labels: likert_labels, prompt: "The world runs on trust and cooperation way more than suspicion and competition."},
				{name: "fh1",	labels: likert_labels, prompt: "The world is hilarious; if we aren't laughing, we aren't paying attention."},
				{name: "fh2",	labels: likert_labels, prompt: "There's humor in everything."},
				{name: "fh3x",	labels: likert_labels, prompt: "While some things are humorous, most of the time the world is not that funny."},
				{name: "fh4",	labels: likert_labels, prompt: "Laughing a ton makes sense because life is hilarious and humor is everywhere."},
				{name: "ht1x",	labels: likert_labels, prompt: "Real danger is everywhere; even if we don't notice it."},
				{name: "ht2",	labels: likert_labels, prompt: "Most things and situations are harmless and totally safe."},
				{name: "ht3",	labels: likert_labels, prompt: "I tend to see the world as pretty safe."},
				{name: "ht4x",	labels: likert_labels, prompt: "On the whole, the world is a dangerous place."},
				{name: "ht5",	labels: likert_labels, prompt: "On the whole, the world is a safe place."},
				{name: "hn1",	labels: likert_labels, prompt: "Most things in the world could be ranked in order of importance."},
				{name: "hn2",	labels: likert_labels, prompt: "Humans, animals, plants, and pretty much everything else can be organized by how important or good they are."},
				{name: "hn3",	labels: likert_labels, prompt: "Most things can be organized into hierarchies, rankings, or pecking orders that reflect true differences among things."},
				{name: "hn4x",	labels: likert_labels, prompt: "Most things aren't better or worse. It's hard to organize the world into hierarchies, rankings, or pecking orders that reflect true differences."},
				{name: "hn5",	labels: likert_labels, prompt: "Things are rarely equal. Most plants and animals, and even people, are better or worse than one another."},
				{name: "it1",	labels: likert_labels, prompt: "It's possible to significantly improve basically anything encountered in life."},
				{name: "it2",	labels: likert_labels, prompt: "In most situations, making things way better is absolutely possible."},
				{name: "it3",	labels: likert_labels, prompt: "Most things and situations are responsive, workable, and totally possible to improve."},
				{name: "it4x",	labels: likert_labels, prompt: "Most situations seem really difficult if not impossible to improve."},
				{name: "it5",	labels: likert_labels, prompt: "No matter who you are, you can significantly improve the world you live in."},
				{name: "iu1",	labels: likert_labels, prompt: "Events happen according to a broader purpose."},
				{name: "iu2",	labels: likert_labels, prompt: "What happens in the world is meant to happen."},
				{name: "iu3x",	labels: likert_labels, prompt: "Events seem to lack any cosmic or bigger purpose."},
				{name: "iu4x",	labels: likert_labels, prompt: "The universe doesn't care if events happen one way or another."},
				{name: "iu5",	labels: likert_labels, prompt: "Everything happens for a reason and on purpose."},
				{name: "ii1",	labels: likert_labels, prompt: "Whatever is happening around me often feels related to me or something I've done."},
				{name: "ii2",	labels: likert_labels, prompt: "When unsure why something is happening, I often suspect it's got something to do with me."},
				{name: "ii3",	labels: likert_labels, prompt: "Much of what happens around me feels like it's because of me or related to me somehow."},
				{name: "ii4x",	labels: likert_labels, prompt: "My first instinct about events happening around me is that they're unrelated to me or anything I've done."},
				{name: "ii5",	labels: likert_labels, prompt: "My first instinct about things happening around me is that they have to do with me or something I've done."},
				{name: "ia1",	labels: likert_labels, prompt: "Every single thing is connected to everything else."},
				{name: "ia2",	labels: likert_labels, prompt: "The world is a place where everything is completely interconnected."},
				{name: "ia3",	labels: likert_labels, prompt: "Though things can appear separate and independent, they really aren't. Instead, all is one."},
				{name: "ia4x",	labels: likert_labels, prompt: "Most things are basically unconnected and independent from each other."},
				{name: "ib1x",	labels: likert_labels, prompt: "Most things in life are kind of boring."},
				{name: "ib2x",	labels: likert_labels, prompt: "While some things are interesting, most things are pretty dull."},
				{name: "ib3x",	labels: likert_labels, prompt: "The world is a somewhat dull place where plenty of things are not that interesting."},
				{name: "ib4",	labels: likert_labels, prompt: "It feels like interesting and exciting things surround us all the time."},
				{name: "ju1",	labels: likert_labels, prompt: "On the whole, the world is a place where we get what we deserve."},
				{name: "ju2x",	labels: likert_labels, prompt: "The world is a place where we rarely deserve what we get."},
				{name: "ju3",	labels: likert_labels, prompt: "Life will find ways to reward those who do good and punish those who do bad."},
				{name: "ju4",	labels: likert_labels, prompt: "The world is a place where working hard and being nice pays off."},
				{name: "ju5",	labels: likert_labels, prompt: "If someone is generous and kind, the world will be kind back."},
				{name: "mm1x",	labels: likert_labels, prompt: "Nothing really matters all that much."},
				{name: "mm2x",	labels: likert_labels, prompt: "Most things are pointless and meaningless."},
				{name: "mm3x",	labels: likert_labels, prompt: "The world is a place where things just don't matter."},
				{name: "mm4",	labels: likert_labels, prompt: "The world is a place where most everything matters."},
				{name: "nd1",	labels: likert_labels, prompt: "The universe needs me for something important."},
				{name: "nd2",	labels: likert_labels, prompt: "The world needs me and my efforts."},
				{name: "nd3",	labels: likert_labels, prompt: "Life has an important part for me to play."},
				{name: "nd4x",	labels: likert_labels, prompt: "It feels like the world doesn't really need me for anything."},
				{name: "pm1x",	labels: likert_labels, prompt: "Life offers more pain than pleasure."},
				{name: "pm2x",	labels: likert_labels, prompt: "Life in this world is usually pain and suffering."},
				{name: "pm3",	labels: likert_labels, prompt: "On the whole, the world is a good place."},
				{name: "pm4",	labels: likert_labels, prompt: "Most things in the world are good."},
				{name: "pm5",	labels: likert_labels, prompt: "Life offers way more pleasure than pain."},
				{name: "pd1x",	labels: likert_labels, prompt: "On the whole, the world is getting worse."},
				{name: "pd2x",	labels: likert_labels, prompt: "It feels like the world is going downhill."},
				{name: "pd3",	labels: likert_labels, prompt: "Though the world has problems, on the whole things are definitely improving."},
				{name: "pd4",	labels: likert_labels, prompt: "It feels like the world is getting better and better."},
				{name: "rd1x",	labels: likert_labels, prompt: "Over time, most situations naturally tend to get worse, not better."},
				{name: "rd2",	labels: likert_labels, prompt: "The usual tendency of most things and situations is to get better, not worse."},
				{name: "rd3",	labels: likert_labels, prompt: "Though sometimes situations get worse, usually they get better."},
				{name: "rd4x",	labels: likert_labels, prompt: "Most things have a habit of getting worse."},
				{name: "sf1x",	labels: likert_labels, prompt: "The world is a place where things are fragile and easily ruined."},
				{name: "sf2x",	labels: likert_labels, prompt: "Most things and situations are delicate and easily destroyed."},
				{name: "sf3x",	labels: likert_labels, prompt: "Most situations are delicate. Though they may be fine now, things could easily unravel."},
				{name: "sf4",	labels: likert_labels, prompt: "It takes a lot for things to fall apart."},
				{name: "ut1",	labels: likert_labels, prompt: "Most everything is easy enough to understand."},
				{name: "ut2",	labels: likert_labels, prompt: "The world is easy enough to understand."},
				{name: "ut3x",	labels: likert_labels, prompt: "Lots of things in the world are too confusing and difficult to understand."},
				{name: "ut4x",	labels: likert_labels, prompt: "The world is a confusing place where many skills and subjects are too hard to figure out."},
				{name: "wn1",	labels: likert_labels, prompt: "Unfamiliar things and places are usually worth trying or checking out."},
				{name: "wn2",	labels: likert_labels, prompt: "I feel everything is worth trying, learning about, or exploring further."},
				{name: "wn3",	labels: likert_labels, prompt: "Everything deserves to be explored."},
				{name: "wn4x",	labels: likert_labels, prompt: "To be honest, though some things are worth trying and exploring, most things aren't."},
				{name: "g1x",	labels: likert_labels, prompt: "On the whole, the world is an uncomfortable and unpleasant place."},
				{name: "e1",	labels: likert_labels, prompt: "No matter where we are or what the topic might be, the world is fascinating."},
				{name: "e2",	labels: likert_labels, prompt: "No matter where we are, incredible beauty is always around us."}
			])
		}
		var n_pages = 3;
		var n_per_page = 34;
		var timeline = [];
		var i, k, trial;
		for (i = 0; i < n_pages; i++) {
			trial = {
				type: jsPsychSurveyLikert,
				preamble: survey_info.instr['page_' + (i + 1)],
				questions: [],
				scale_width: 500,
				on_start: function() {
					var el = jsPsych.getDisplayElement();
					el.style.marginTop = '100px';
					el.style.marginBottom = '100px';
				},
				on_finish: function(data) {
					data.expt_part = 'pi-99'
					var el = jsPsych.getDisplayElement();
					el.style.marginTop = '';
					el.style.marginBottom = '';
				}
			}
			for (k = 0; k < n_per_page; k++) {
				trial.questions.push(survey_info.questions.pop());
			}
			timeline.push(trial);
		}
		return({timeline: timeline});
	}
)();
