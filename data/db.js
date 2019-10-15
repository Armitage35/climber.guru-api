const knex = require('knex');

const database = knex({
	client: 'pg', // pg is the database library for postgreSQL on knexjs
	connection: {
		host: '127.0.0.1', // Your local host IP
		user: 'adrien', // Your postgres user name
		password: '2gf31d31', // Your postgres user password
		database: 'climber_guru' // Your database name
	}
});

module.exports = database;
