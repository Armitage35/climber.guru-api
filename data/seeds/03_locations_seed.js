exports.seed = function(knex) {
	return knex('location')
		.del()
		.then(() =>
			knex('location').insert([

			])
		);
};
