const knex = require('../../data/db');

const router = app => {
	app.get('/', (request, response) => {
		response.send({
			message: 'Node.js and Express REST API',
		});
	});

	app.get('/users', (req, res) => {
		knex.select()
			.from('account')
			.then(function(users) {
				console.log(users);
				res.send(users);
			});
	});

	app.get('/sessions', (req, res) => {
		knex.select()
			.from('session')
			.then(function(sessions) {
				res.send(sessions);
			});
	});

	app.get('/climbs', (req, res) => {
		knex.select()
			.from('climb')
			.then(function(climbs) {
				res.send(climbs);
			});
	});
};

module.exports = router;
