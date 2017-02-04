var SwaggerExpress = require('swagger-express-mw');
const cookieParser = require('cookie-parser');

var app = require('express')();
app.use(cookieParser());
module.exports = app; // for testing

var config = {
	appRoot: __dirname // required config
};

SwaggerExpress.create(config, function (err, swaggerExpress) {
	if (err) {
		throw err;
	}

	// install middleware
	swaggerExpress.register(app);

	var port = process.env.PORT || 10010;
	app.listen(port);
	console.log('\033[2J');
});
