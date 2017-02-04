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


const postItinerary = wrap(async function postItinerary(req, res) {
	// variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}

	const data = req.swagger.params.data.value;
	console.log(Object.getOwnPropertyNames(Itin));
	try {
		await Itin.add(data);
		let result = await Itin.get();
		console.log(result[0]);
		console.log(result[0].data[0]);
		res.json();
	} catch (e) {
		console.log(e);
	}
	// this sends back a JSON response which is a single string
});

const register = wrap(async function register(req, res) {
	if (req.cookies.username) {
		return res.status(404).json({
			message: 'Already logged in!'
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
			message: invalid,
		});
	}
});

const login = wrap(async function login(req, res) {
	if (req.cookies.username) {
		return res.status(404).json({
			message: 'Already logged in!'
		});
	}
	const data = req.swagger.params.loginData.value;

	if (!await User.login(data)) {
		return res.status(404).json({
			message: 'Invalid login credentials'
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
	register,
	login,
	logout,
};
