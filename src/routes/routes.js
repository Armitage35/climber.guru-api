const pg = require("pg");
const connectionString = "postgres://postgres:123@localhost:5432/test_db";


const config = {
	user: 'postgres',
	database: 'climber_guru',
	password: 'YOURPASSWORD',
	port: 5432
};

// pool takes the object above -config- as parameter
const pool = new pg.Pool(config);

const router = app => {
	app.get('/', (request, response) => {
		response.send({
			message: 'Node.js and Express REST API'
		});
	});


	app.get('/db', (req, res, next) => {
		pool.connect(function (err, client, done) {
			if (err) {
				console.log("Can not connect to the DB" + err);
			}
			client.query('SELECT * FROM student', function (err, result) {
				done();
				if (err) {
					console.log(err);
					res.status(400).send(err);
				}
				res.status(200).send(result.rows);
			})
		})
	});
}


module.exports = router;
