// Climbing grade catalogue came from https://mojagear.com/learn/2015/12/15/rock-climbing-grades-comparison-chart-rating-systems/

exports.seed = function(knex) {
	return knex('grading_system')
		.del()
		.then(() =>
			knex('grading_system').insert([
				{
					id: 1,
					name: 'YDS',
					climb_type: 'route'
				},
				{
					id: 2,
					name: 'French',
					climb_type: 'route'
				},
				{
					id: 3,
					name: 'Australian',
					climb_type: 'route'
				},
				{
					id: 4,
					name: 'UK-Route',
					climb_type: 'route'
				},
				{
					id: 5,
					name: 'UK-Bouldering',
					climb_type: 'route'
				},
				{
					id: 6,
					name: 'UIAA',
					climb_type: 'route'
				},
				{
					id: 7,
					name: 'V-Scale',
					climb_type: 'bouldering'
				},
				{
					id: 8,
					name: 'Font',
					climb_type: 'bouldering'
				}
			])
		);
};
