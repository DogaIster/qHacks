const connect = require('camo').connect;
const Document = require('camo').Document;
const EmbeddedDocument = require('camo').EmbeddedDocument;
const validEmail = require("email-validator");
const uri = 'nedb:///data/chat-it';
const bcrypt = require('bcrypt');
const saltRounds = 10;

let db;


class User extends Document {
	constructor() {
		super();
		this.username = String;
		this.password = String;
		this.email = String;
		this.phoneNumber = Number;
	}

	static async verify(user, password) {
		if (await bcrypt.compare(user.password, password)) {
			console.log("\n\nUser verified from db:", user);
			return true;
		}


		return false;
	}

	static async get(data) {
		if (!data.username || !data.password)
			return;
		let usr = await this.findOne({
			username: data.username
		});
		console.log("\n\nUser grabbed from db:", usr);
		return usr;
	}

	static async login(data) {
		let usr = await this.get(data);
		if (!usr) {
			return false;
		}
		if (!await this.verify(data, usr.password))
			return false;

		console.log(`\n\nUser login:`, usr);
		return true;
	}

	static async add(data) {
		//let deleted = await this.deleteMany({});
		//console.log(`Deleted:${deleted}`);
		//check if user exists yet
		let u = await this.get(data);
		if (u) {
			console.log('User already exists');
			return 'User already exists';
		}

		if (!validEmail.validate(data.email)) {
			console.log('Invalid email');
			return 'Invalid email';
		}

		let user = User.create(data);
		try {
			let hashedPass = await bcrypt.hash(data.password, saltRounds);
			user.password = hashedPass;
			await user.save();
			console.log(`\n\nCreated and saved user`, user);
			return;
		} catch (e) {
			console.log(e);
			return e;
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
		this.hits = Number;
		this.itineraryData = [
			[Entry]
		];
	}


	static async add(data) {
		//let deleted = await this.deleteMany({});
		//console.log(`Deleted:${deleted}`);

		let itin = Itin.create();
		itin.location = data.location;
		itin.dateTo = data.dateTo;
		itin.dateFrom = data.dateFrom;
		itin.user = data.username;
		itin.itineraryData = [];
		itin.hits = 0;

		for (let day of data.itineraryData) {
			let hour = [];
			//console.log(day)
			for (let entry of day) {
				//console.log(entry);
				let entryObj = Entry.create(entry);
				itin.location += ' ' + entryObj.location;
				hour.push(entryObj);
			}
			itin.itineraryData.push(hour);
		}

		try {
			await itin.save();
		} catch (e) {
			console.log(e);
			return;
		}
		console.log('itinerary successfully saved!');
	}

	static async getAll(limit = 100) {
		console.log('get all called');
		let results = await this.find({}, {
			limit,
			sort: '-hits',
			populate: false
		});
		//increment hits

		let returnArr = [];
		for (let result of results) {
			result.hits++;
			try {
				await result.save();
			} catch (e) {
				console.log(e);
			}
			for (let day of result.itineraryData) {
				for (let hour of day) {
					delete hour._schema;
				}
			}
			returnArr.push(result.toJSON());
		}

		console.log('returning results');
		console.log(returnArr);
		return returnArr;
	}

	static async get(data) {
		let locationRegex = new RegExp(data.location, 'i');
		let query = {
			'location': locationRegex
		};

		console.log(query);
		let result = await this.findOne(query);
		console.log(result);
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
