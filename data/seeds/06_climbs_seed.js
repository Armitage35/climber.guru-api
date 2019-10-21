exports.seed = function(knex) {
	return knex('climb')
		.del()
		.then(function() {
			return knex('climb').insert([
				{
					account_id: 7,
					session_id: 13,
					tags: 'dyno',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 1
				},
				{
					account_id: 3,
					session_id: 3,
					tags: 'slab',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 1
				},
				{
					account_id: 4,
					session_id: 24,
					tags: 'crimp',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 2
				},
				{
					account_id: 1,
					session_id: 27,
					tags: 'slab',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 5
				},
				{
					account_id: 9,
					session_id: 8,
					tags: 'dyno',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 4
				},
				{
					account_id: 6,
					session_id: 22,
					tags: 'dyno',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 4
				},
				{
					account_id: 7,
					session_id: 11,
					tags: 'slab',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 5
				},
				{
					account_id: 9,
					session_id: 2,
					tags: 'slab',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 2
				},
				{
					account_id: 1,
					session_id: 8,
					tags: 'dyno',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 2
				},
				{
					account_id: 8,
					session_id: 21,
					tags: 'slab',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 4
				},
				{
					account_id: 5,
					session_id: 2,
					tags: 'crimp',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 5
				},
				{
					account_id: 1,
					session_id: 24,
					tags: 'slab',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 3
				},
				{
					account_id: 9,
					session_id: 18,
					tags: 'dyno',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 1
				},
				{
					account_id: 3,
					session_id: 6,
					tags: 'slab',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 1
				},
				{
					account_id: 8,
					session_id: 13,
					tags: 'slab',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 5
				},
				{
					account_id: 2,
					session_id: 22,
					tags: 'dyno',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 3
				},
				{
					account_id: 5,
					session_id: 5,
					tags: 'crimp',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 1
				},
				{
					account_id: 5,
					session_id: 5,
					tags: 'slab',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 5
				},
				{
					account_id: 8,
					session_id: 16,
					tags: 'crimp',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 3
				},
				{
					account_id: 2,
					session_id: 12,
					tags: 'slab',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 1
				},
				{
					account_id: 7,
					session_id: 9,
					tags: 'slab',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 4
				},
				{
					account_id: 6,
					session_id: 25,
					tags: 'crimp',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 1
				},
				{
					account_id: 7,
					session_id: 13,
					tags: 'crimp',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 2
				},
				{
					account_id: 9,
					session_id: 12,
					tags: 'dyno',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 2
				},
				{
					account_id: 3,
					session_id: 19,
					tags: 'dyno',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 2
				},
				{
					account_id: 6,
					session_id: 2,
					tags: 'slab',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 5
				},
				{
					account_id: 7,
					session_id: 19,
					tags: 'crimp',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 1
				},
				{
					account_id: 9,
					session_id: 11,
					tags: 'dyno',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 1
				},
				{
					account_id: 1,
					session_id: 23,
					tags: 'dyno',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 4
				},
				{
					account_id: 6,
					session_id: 24,
					tags: 'slab',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 1
				},
				{
					account_id: 1,
					session_id: 24,
					tags: 'slab',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 4
				},
				{
					account_id: 5,
					session_id: 14,
					tags: 'slab',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 5
				},
				{
					account_id: 7,
					session_id: 12,
					tags: 'crimp',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 4
				},
				{
					account_id: 2,
					session_id: 10,
					tags: 'slab',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 2
				},
				{
					account_id: 3,
					session_id: 16,
					tags: 'slab',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 1
				},
				{
					account_id: 4,
					session_id: 25,
					tags: 'slab',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 5
				},
				{
					account_id: 6,
					session_id: 16,
					tags: 'slab',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 3
				},
				{
					account_id: 5,
					session_id: 25,
					tags: 'dyno',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 5
				},
				{
					account_id: 8,
					session_id: 11,
					tags: 'crimp',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 4
				},
				{
					account_id: 8,
					session_id: 11,
					tags: 'slab',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 5
				},
				{
					account_id: 5,
					session_id: 20,
					tags: 'crimp',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 2
				},
				{
					account_id: 5,
					session_id: 22,
					tags: 'slab',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 5
				},
				{
					account_id: 5,
					session_id: 14,
					tags: 'crimp',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 5
				},
				{
					account_id: 9,
					session_id: 30,
					tags: 'crimp',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 5
				},
				{
					account_id: 8,
					session_id: 4,
					tags: 'slab',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 1
				},
				{
					account_id: 6,
					session_id: 13,
					tags: 'crimp',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 5
				},
				{
					account_id: 9,
					session_id: 22,
					tags: 'dyno',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 3
				},
				{
					account_id: 5,
					session_id: 4,
					tags: 'dyno',
					grade: Math.floor(Math.random() * 157) + 1,
					quality: 2
				}
			]);
		});
};
