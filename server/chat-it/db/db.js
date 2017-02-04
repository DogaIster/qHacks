const connect = require('camo').connect;
var Document = require('camo').Document;

let db;
var uri = 'nedb:///data/chat-it';

class Dog extends Document {
	constructor() {
		super();

		this.name = String;
		this.breed = String;
	}
}


connect(uri).then(function (database) {
	db = database;
	console.log('Connected!');
	var lassie = Dog.create({
		name: 'Lassie',
		breed: 'Collie'
	});

	lassie.save().then(function (l) {
		console.log(l._id);


		Dog.findOne({
			name: 'Lassie'
		}).then(function (l) {
			console.log('Got Lassie!');
			console.log('Her unique ID is', l._id);
		});

	});

});
