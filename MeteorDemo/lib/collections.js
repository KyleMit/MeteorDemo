Questions = new Mongo.Collection('questions');


if (Meteor.isServer) {
	if (Questions.find().count() === 0) {
	  Questions.insert(
	    {text: "Seed Question?"}
	  );
	}	
}


Meteor.methods({
	'insertQuestion': function(q) {
		Questions.insert(q)
	}
})