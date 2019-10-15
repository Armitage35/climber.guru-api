const pg = require('pg');
// const knex = require('knex');

const config = {
	user: 'adrien',
	database: 'climber_guru',
	password: '2gf31d31',
	port: 5432,
};

const pool = new pg.Pool(config);

const router = (app) => {
	app.get('/', (request, response) => {
		response.send({
			message: 'Node.js and Express REST API',
		});
	});

	app.get('/users', (req, res) => {
		pool.connect((err, client, done) => {
			if (err) {
				console.log(`Can not connect to the DB${err}`);
			}

			client.query('SELECT * FROM account', (err, result) => {
				done();
				if (err) {
					console.log(err);
					res.status(400).send(err);
				}
				res.status(200).send(result.rows);
			});
		});
	});

	app.get('/sessions', (req, res) => {
		pool.connect((err, client, done) => {
			if (err) {
				console.log(`Can not connect to the DB${err}`);
			}

			client.query('SELECT * FROM session', (err, result) => {
				done();
				if (err) {
					console.log(err);
					res.status(400).send(err);
				}
				res.status(200).send(result.rows);
			});
		});
	});

	app.get('/climbs', (req, res) => {
		pool.connect((err, client, done) => {
			if (err) {
				console.log(`Can not connect to the DB${err}`);
			}

			client.query('SELECT * FROM session', (err, result) => {
				done();
				if (err) {
					console.log(err);
					res.status(400).send(err);
				}
				res.status(200).send(result.rows);
			});
		});
	});
};

module.exports = router;
