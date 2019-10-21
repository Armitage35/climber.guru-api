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
		let climbs = req.body.climbs;
		let userID = req.body.userID;

		knex('session')
			.insert({
				account_id: userID,
				location: req.body.session.location
			})
			.returning('id')
			.then(function(newSessionID, err) {
				if (err) return res.send(err);
				for (const element of climbs) {
					element.session_id = newSessionID[0];
					element.account_id = userID;
				}

				knex('climb')
					.insert(climbs)
					.then(function() {
						res.send('OK');
					});
			});
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
