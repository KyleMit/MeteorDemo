Template.question_submit.events({
	'submit form': function(ev, template) {
		// prevent browser submit
		ev.preventDefault();

		// get value
		var txt = ev.target.question.value;

		// insert into database
		Questions.insert({
			text: txt,
			author: Meteor.user().username
		});

		// clean up after ourselves
		ev.target.question.value = "";
	}
})