const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

require('dotenv').config();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

routes(app);

// Start the server
const server = app.listen(port, error => {
	if (error) return console.log(`Error: ${error}`);

	console.log(`🚀 Server listening on port ${server.address().port}`);
});
