exports.seed = function(knex) {
	return knex('climb_performance')
		.del()
		.then(() =>
			knex('climb_performance').insert([
				{
					name: 'Onsight',
					coeficient: 3
				},
				{
					name: 'Flash',
					coeficient: 2
				},
				{
					name: 'Redpoint',
					coeficient: 1
				},
				{
					name: 'Repeat',
					coeficient: 0.5
				}
			])
		);
};
