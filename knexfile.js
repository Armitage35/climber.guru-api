/* eslint-disable no-undef */
require('dotenv').config();

module.exports = {
	development: {
		client: 'pg',
		connection: process.env.DB_HOST,
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},

	testing: {
		client: 'pg',
		connection: process.env.DB_HOST,
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},

	production: {
		client: 'pg',
		connection: process.env.DB_HOST,
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},
};
