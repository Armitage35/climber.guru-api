exports.seed = function(knex) {
	return knex('climb')
		.del()
		.then(function() {
			return knex('climb').insert([
				{
					account_id: 7,
					session_id: 13,
					tags: 'dyno',
					grade: 33,
					quality: 1
				},
				{
					account_id: 3,
					session_id: 3,
					tags: 'slab',
					grade: 62,
					quality: 1
				},
				{
					account_id: 4,
					session_id: 24,
					tags: 'crimp',
					grade: 73,
					quality: 2
				},
				{
					account_id: 1,
					session_id: 27,
					tags: 'slab',
					grade: 27,
					quality: 5
				},
				{
					account_id: 9,
					session_id: 8,
					tags: 'dyno',
					grade: 86,
					quality: 4
				},
				{
					account_id: 6,
					session_id: 22,
					tags: 'dyno',
					grade: 81,
					quality: 4
				},
				{
					account_id: 7,
					session_id: 11,
					tags: 'slab',
					grade: 12,
					quality: 5
				},
				{
					account_id: 9,
					session_id: 2,
					tags: 'slab',
					grade: 99,
					quality: 2
				},
				{
					account_id: 1,
					session_id: 8,
					tags: 'dyno',
					grade: 60,
					quality: 2
				},
				{
					account_id: 8,
					session_id: 21,
					tags: 'slab',
					grade: 37,
					quality: 4
				},
				{
					account_id: 5,
					session_id: 2,
					tags: 'crimp',
					grade: 21,
					quality: 5
				},
				{
					account_id: 1,
					session_id: 24,
					tags: 'slab',
					grade: 70,
					quality: 3
				},
				{
					account_id: 9,
					session_id: 18,
					tags: 'dyno',
					grade: 100,
					quality: 1
				},
				{
					account_id: 3,
					session_id: 6,
					tags: 'slab',
					grade: 98,
					quality: 1
				},
				{
					account_id: 8,
					session_id: 13,
					tags: 'slab',
					grade: 90,
					quality: 5
				},
				{
					account_id: 2,
					session_id: 22,
					tags: 'dyno',
					grade: 23,
					quality: 3
				},
				{
					account_id: 5,
					session_id: 5,
					tags: 'crimp',
					grade: 15,
					quality: 1
				},
				{
					account_id: 5,
					session_id: 5,
					tags: 'slab',
					grade: 25,
					quality: 5
				},
				{
					account_id: 8,
					session_id: 16,
					tags: 'crimp',
					grade: 82,
					quality: 3
				},
				{
					account_id: 2,
					session_id: 12,
					tags: 'slab',
					grade: 52,
					quality: 1
				},
				{
					account_id: 7,
					session_id: 9,
					tags: 'slab',
					grade: 78,
					quality: 4
				},
				{
					account_id: 6,
					session_id: 25,
					tags: 'crimp',
					grade: 80,
					quality: 1
				},
				{
					account_id: 7,
					session_id: 13,
					tags: 'crimp',
					grade: 99,
					quality: 2
				},
				{
					account_id: 9,
					session_id: 12,
					tags: 'dyno',
					grade: 50,
					quality: 2
				},
				{
					account_id: 3,
					session_id: 19,
					tags: 'dyno',
					grade: 4,
					quality: 2
				},
				{
					account_id: 6,
					session_id: 2,
					tags: 'slab',
					grade: 93,
					quality: 5
				},
				{
					account_id: 7,
					session_id: 19,
					tags: 'crimp',
					grade: 82,
					quality: 1
				},
				{
					account_id: 9,
					session_id: 11,
					tags: 'dyno',
					grade: 96,
					quality: 1
				},
				{
					account_id: 1,
					session_id: 23,
					tags: 'dyno',
					grade: 82,
					quality: 4
				},
				{
					account_id: 6,
					session_id: 24,
					tags: 'slab',
					grade: 48,
					quality: 1
				},
				{
					account_id: 1,
					session_id: 24,
					tags: 'slab',
					grade: 29,
					quality: 4
				},
				{
					account_id: 5,
					session_id: 14,
					tags: 'slab',
					grade: 36,
					quality: 5
				},
				{
					account_id: 7,
					session_id: 12,
					tags: 'crimp',
					grade: 36,
					quality: 4
				},
				{
					account_id: 2,
					session_id: 10,
					tags: 'slab',
					grade: 96,
					quality: 2
				},
				{
					account_id: 3,
					session_id: 16,
					tags: 'slab',
					grade: 82,
					quality: 1
				},
				{
					account_id: 4,
					session_id: 25,
					tags: 'slab',
					grade: 11,
					quality: 5
				},
				{
					account_id: 6,
					session_id: 16,
					tags: 'slab',
					grade: 16,
					quality: 3
				},
				{
					account_id: 5,
					session_id: 25,
					tags: 'dyno',
					grade: 99,
					quality: 5
				},
				{
					account_id: 8,
					session_id: 11,
					tags: 'crimp',
					grade: 19,
					quality: 4
				},
				{
					account_id: 8,
					session_id: 11,
					tags: 'slab',
					grade: 95,
					quality: 5
				},
				{
					account_id: 5,
					session_id: 20,
					tags: 'crimp',
					grade: 41,
					quality: 2
				},
				{
					account_id: 5,
					session_id: 22,
					tags: 'slab',
					grade: 25,
					quality: 5
				},
				{
					account_id: 5,
					session_id: 14,
					tags: 'crimp',
					grade: 48,
					quality: 5
				},
				{
					account_id: 9,
					session_id: 30,
					tags: 'crimp',
					grade: 75,
					quality: 5
				},
				{
					account_id: 8,
					session_id: 4,
					tags: 'slab',
					grade: 89,
					quality: 1
				},
				{
					account_id: 6,
					session_id: 13,
					tags: 'crimp',
					grade: 71,
					quality: 5
				},
				{
					account_id: 9,
					session_id: 22,
					tags: 'dyno',
					grade: 95,
					quality: 3
				},
				{
					account_id: 5,
					session_id: 4,
					tags: 'dyno',
					grade: 37,
					quality: 2
				}
			]);
		});
};
