const knex = require('../../data/db');

const router = app => {
	app.get('/', (request, response) => {
		response.send({
			message: 'Node.js and Express REST API'
		});
	});

	app.get('/users', (req, res) => {
		knex.select()
			.from('account')
			.where('id', req.query.userID)
			.then(function(users) {
				res.send(users);
			});
	});

	app.get('/sessions', (req, res) => {
		knex.select()
			.from('session')
			.where('account_id', req.query.userID)
			.then(function(sessions) {
				res.send(sessions);
			});
	});

	app.post('/sessions', (req, res) => {
		knex('session')
			.insert({ account_id: req.body.userID, location: 62, climb_type: 2, grading_system: 'V system'})
			.then(res.send(req.body));
	});

	app.get('/climbs', (req, res) => {
		knex.select()
			.from('climb')
			.where('account_id', req.query.userID)
			.then(function(climbs) {
				res.send(climbs);
			});
	});
};

module.exports = router;
