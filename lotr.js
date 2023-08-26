
var lotr = (
	function() {
		var likert_labels = [
			"Strongly disagree",
			"Disagree",
			"Neutral",
			"Agree",
			"Strongly agree"
		];
		var trial = {
			type: jsPsychSurveyLikert,
			preamble: 'Please answer the following questions about yourself by indicating the extent of your agreement. Be as honest as you can throughout, and try not to let your responses to one question influence your responses to other questions. There are no right or wrong answers.',
			questions: [
				{labels: likert_labels, prompt: "In uncertain times, I usually expect the best."},
				{labels: likert_labels, prompt: "It's easy for me to relax."},
				{labels: likert_labels, prompt: "If something can go wrong for me, it will."},
				{labels: likert_labels, prompt: "I'm always optimistic about my future."},
				{labels: likert_labels, prompt: "I enjoy my friends a lot."},
				{labels: likert_labels, prompt: "It's important for me to keep busy."},
				{labels: likert_labels, prompt: "I hardly ever expect things to go my way."},
				{labels: likert_labels, prompt: "I don't get upset too easily."},
				{labels: likert_labels, prompt: "I rarely count on good things happening to me."},
				{labels: likert_labels, prompt: "Overall, I expect more good things to happen to me than bad."}
			],
			scale_width: 500,
			on_start: function() {
				var el = jsPsych.getDisplayElement();
				el.style.marginTop = '100px';
				el.style.marginBottom = '100px';
			},
			on_finish: function(data) {
				data.expt_part = 'lotr';
				var el = jsPsych.getDisplayElement();
				el.style.marginTop = '';
				el.style.marginBottom = '';
			}
		}
		return(trial);
	}
)();











