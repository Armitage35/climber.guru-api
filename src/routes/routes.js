const knex = require('../../data/db');

const router = app => {
	app.get('/', (request, response) => {
		response.send({
			message: 'Node.js and Express REST API'
		});
	});

	app.get('/user', (req, res) => {
		knex.select()
			.from('account')
			.where('id', req.query.userID)
			.then(function(userDetails) {
				knex.select()
					.from('climb_grade')
					.whereIn('system_id', [
						userDetails[0].bouldering_grading,
						userDetails[0].route_grading
					])
					.join('grading_system', { system_id: 'grading_system.id' })
					.then(function(grades) {
						let boulderGrades = [];
						let routeGrades = [];

						for (const element of grades) {
							if (element.climb_type === 'route') {
								routeGrades.push(element);
							} else boulderGrades.push(element);
						}

						let user = {
							details: userDetails,
							grades: {
								boulderGrades: boulderGrades,
								routeGrades: routeGrades
							}
						};
						res.send(user);
					});
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
