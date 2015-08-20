Template.question_submit.events({
	'submit form': function(ev, template) {
		// prevent browser submit
		ev.preventDefault();

		// get value
		var txt = ev.target.question.value;

		// insert into database
		var q = {
			text: txt,
			author: Meteor.user().username
		}

		Meteor.call('insertQuestion',q)

		// clean up after ourselves
		ev.target.question.value = "";
	}
})