exports.seed = function(knex) {
	return knex('session')
		.del()
		.then(function() {
			return knex('session').insert([
				{
					account_id: 6,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/168x143.jpg/cc0000/ffffff',
				},
				{
					account_id: 2,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/151x195.jpg/ff4444/ffffff',
				},
				{
					account_id: 8,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/182x187.bmp/ff4444/ffffff',
				},
				{
					account_id: 5,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/154x192.bmp/dddddd/000000',
				},
				{
					account_id: 6,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/214x147.png/5fa2dd/ffffff',
				},
				{
					account_id: 9,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/186x199.png/dddddd/000000',
				},
				{
					account_id: 6,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/144x165.bmp/ff4444/ffffff',
				},
				{
					account_id: 7,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/214x188.png/ff4444/ffffff',
				},
				{
					account_id: 3,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/137x234.bmp/dddddd/000000',
				},
				{
					account_id: 9,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/183x124.png/ff4444/ffffff',
				},
				{
					account_id: 1,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/246x135.png/dddddd/000000',
				},
				{
					account_id: 2,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/175x214.bmp/ff4444/ffffff',
				},
				{
					account_id: 6,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/152x173.png/ff4444/ffffff',
				},
				{
					account_id: 1,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/162x200.png/5fa2dd/ffffff',
				},
				{
					account_id: 6,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/184x185.bmp/dddddd/000000',
				},
				{
					account_id: 7,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/175x213.png/ff4444/ffffff',
				},
				{
					account_id: 9,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/162x189.bmp/cc0000/ffffff',
				},
				{
					account_id: 7,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/204x248.png/5fa2dd/ffffff',
				},
				{
					account_id: 4,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/102x206.jpg/dddddd/000000',
				},
				{
					account_id: 9,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/117x223.bmp/ff4444/ffffff',
				},
				{
					account_id: 8,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/159x218.bmp/ff4444/ffffff',
				},
				{
					account_id: 3,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/145x134.jpg/ff4444/ffffff',
				},
				{
					account_id: 1,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/214x235.png/ff4444/ffffff',
				},
				{
					account_id: 1,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/213x194.bmp/dddddd/000000',
				},
				{
					account_id: 9,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/108x164.bmp/ff4444/ffffff',
				},
				{
					account_id: 3,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/240x141.bmp/5fa2dd/ffffff',
				},
				{
					account_id: 1,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/214x202.jpg/ff4444/ffffff',
				},
				{
					account_id: 8,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/128x173.png/dddddd/000000',
				},
				{
					account_id: 9,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/192x148.png/dddddd/000000',
				},
				{
					account_id: 9,
					location: Math.floor(Math.random() * 8) + 1,
					photo: 'http://dummyimage.com/199x209.png/cc0000/ffffff',
				},
			]);
		});
};
