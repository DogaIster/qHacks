'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
const Itin = require('../../db/db').Itin;
const User = require('../../db/db').User;
const wrap = require('express-async-wrap');

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */


/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */

const webhook = wrap(async function webhook(req, res) {
	let obj = req.swagger.params.webhook.value;
	console.log(obj.result.parameters);
	let city = obj.result.parameters["geo-city"];
	let country = obj.result.parameters["geo-country"];
	let location = city || country;
	console.log(location);
	let result = await Itin.get({
		location
	});
	let retStr = '\n\n\n';
	if (city) {
		let locationRegex = new RegExp(city, 'i');
		let match;
		let isMatched = false;
		for (let day of result.itineraryData) {
			if (isMatched) break;
			for (let entry of day) {
				if (entry.location.search(locationRegex) !== -1) {
					match = entry;
					isMatched = true;
					break;
				}
			}
		}

		retStr += `Wow! ${city}! That's a great place to check out.

Luckily, ${result.user} also went in this area from ${result.dateFrom} - ${result.dateTo}.

They went ${match.activity} at ${match.time} for ${match.duration} hours.`;

	} else {
		retStr += `${country}, a great place to check out! Text me back a city in ${country} to get more information of what people did there.

Here are some possible cities that people have written about:

`;
		for (let day of result.itineraryData) {
			for (let entry of day) {
				retStr += entry.location + '\n';
			}
		}
	}

	console.log(result);
	return res.json({
		speech: retStr,
		displayText: retStr,
		data: {},
		contextOut: [],
		source: 'chatIt',
	});
});
const postItinerary = wrap(async function postItinerary(req, res) {
	// variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}

	const data = req.swagger.params.itineraryData.value;
	data.username = req.cookies.username || 'Anonymous';

	try {
		await Itin.add(data);
		let results = await Itin.getAll();
		console.log(results[0]);
		console.log(results[0].itineraryData[0]);
		res.json({
			message: 'itinerary successfully added'
		});

	} catch (e) {
		res.status(404).json({
			message: 'An error has occured',
			error: e
		});
	}
});


const register = wrap(async function register(req, res) {
	console.log('registering user');
	if (req.cookies.username) {
		console.log('User already logged in');
		return res.status(404).json({
			message: 'An error has occured',
			error: 'Already logged in'
		});
	}

	const data = req.swagger.params.registerData.value;

	let invalid = await User.add(data);
	if (!invalid) {
		res.cookie('username', data.username);
		return res.json({
			message: 'User successfully registered',
			username: data.username
		});
	} else {
		return res.status(404).json({
			message: 'An error has occured',
			error: invalid,
		});
	}
});

const getItinerary = wrap(async function getItinerary(req, res) {
	const query = req.swagger.params.getParams.value;
	//check if obj empty
	if (Object.keys(query).length === 0 && query.constructor === Object) {
		try {
			let results = await Itin.getAll();
			return res.json(results);
		} catch (e) {
			console.log('error', e);
		}
	}
});

const login = wrap(async function login(req, res) {
	if (req.cookies.username) {
		return res.status(404).json({
			message: 'An error has occured',
			error: 'Already logged in!'
		});
	}
	const data = req.swagger.params.loginData.value;

	if (!await User.login(data)) {
		return res.status(404).json({
			message: 'An error has occured',
			error: 'Invalid login credentials'
		});
	}

	res.cookie('username', data.username);
	return res.json({
		message: 'User successfully logged in',
		username: data.username
	});
});

const logout = wrap(function logout(req, res) {
	res.cookie('username', '');
	return res.json({
		message: 'User successfully logged out'
	});
});

module.exports = {
	postItinerary,
	getItinerary,
	register,
	login,
	logout,
	webhook
};
