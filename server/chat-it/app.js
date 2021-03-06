var SwaggerExpress = require('swagger-express-mw');
const cors = require('cors');
const cookieParser = require('cookie-parser');

var app = require('express')();
app.use(cookieParser());
app.use(cors());

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

	var port = process.env.PORT || 80;
	app.listen(port);
});
