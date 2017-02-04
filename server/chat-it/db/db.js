const connect = require('camo').connect;
const Document = require('camo').Document;
const EmbeddedDocument = require('camo').EmbeddedDocument;
const uri = 'nedb:///data/chat-it';
let db;


class User extends Document {
	constructor() {
		super();
		this.username = String;
		this.password = String;
	}

	static verify(user, password) {
		if (user.password === password)
			return;

		return 'Invalid login';
	}
	static async get(data) {
		let user = await this.find({
			username: data.username
		});
		return this.verify(user, data.password);
	}

	static async add(data) {
		//check if user exists yet
		let u = this.find({
			username: data.username
		});
		if (u) {
			return {
				error: 'User already exists'
			};
		}

		let user = User.create(data);
		try {
			await user.save();
			return;
		} catch (e) {
			return console.log(e);
		}
	}
}

class Entry extends EmbeddedDocument {
	constructor() {
		super();
		this.location = String;
		this.activity = String;
		this.time = String;
		this.duration = Number;
	}
}


class Itin extends Document {
	constructor() {
		super();
		this.user = String;
		this.location = String;
		this.dateTo = String;
		this.dateFrom = String;
		this.data = [
			[Entry]
		];
	}


	static async add(data) {
		let deleted = await this.deleteMany({});
		console.log(`Deleted:${deleted}`);
		let itin = Itin.create();
		//itin.user = 'blah';
		itin.location = data.location;
		itin.dateTo = data.dateTo;
		itin.dateFrom = data.dateFrom;
		itin.data = [];

		for (let day of data.data) {
			let hour = [];
			//console.log(day)
			for (let entry of day) {
				//console.log(entry);
				let entryObj = Entry.create(entry);
				hour.push(entryObj);
			}
			itin.data.push(hour);
		}

		try {
			await itin.save();
		} catch (e) {
			console.log(e);
			return;
		}
		console.log('itinerary successfully saved!');
	}

	static async get() {
		return await this.find({});
	}
}


connect(uri).then(function (database) {
	db = database;
	console.log('Connected to db!');
});

module.exports = {
	Itin,
	User,
};
