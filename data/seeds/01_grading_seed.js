exports.seed = function(knex) {
	return knex('grading_system')
		.del()
		.then(() =>
			knex('grading_system').insert([

			])
		);
};
