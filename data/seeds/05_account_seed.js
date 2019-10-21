exports.seed = function(knex) {
	return knex('account')
		.del()
		.then(() =>
			knex('account').insert([
				{
					id: 1,
					first_name: 'Ronnie',
					last_name: 'Nafziger',
					email: 'rnafziger0@go.com',
					city: 'Benito Juarez',
					country: 'Mexico',
					favourite_location: Math.floor(Math.random() * 8) + 1,
					bouldering_grading: 7,
					route_grading: 1
				},
				{
					id: 2,
					first_name: 'Aime',
					last_name: 'Simpkins',
					email: 'asimpkins1@tripod.com',
					city: 'Zeleneč',
					country: 'Czech Republic',
					favourite_location: Math.floor(Math.random() * 8) + 1,
					bouldering_grading: 7,
					route_grading: 1
				},
				{
					id: 3,
					first_name: 'Demott',
					last_name: 'Stirton',
					email: 'dstirton2@cam.ac.uk',
					city: 'Yolöten',
					country: 'Turkmenistan',
					favourite_location: Math.floor(Math.random() * 8) + 1,
					bouldering_grading: 7,
					route_grading: 1
				},
				{
					id: 4,
					first_name: 'Portie',
					last_name: 'Kempston',
					email: 'pkempston3@lycos.com',
					city: 'Jintao',
					country: 'China',
					favourite_location: Math.floor(Math.random() * 8) + 1,
					bouldering_grading: 7,
					route_grading: 1
				},
				{
					id: 5,
					first_name: 'Fulvia',
					last_name: 'Simonassi',
					email: 'fsimonassi4@bbc.co.uk',
					city: 'Shuiyuan',
					country: 'China',
					favourite_location: Math.floor(Math.random() * 8) + 1,
					bouldering_grading: 7,
					route_grading: 1
				},
				{
					id: 6,
					first_name: 'Lenore',
					last_name: 'Moreland',
					email: 'lmoreland5@tinyurl.com',
					city: 'Gialo',
					country: 'Libya',
					favourite_location: Math.floor(Math.random() * 8) + 1,
					bouldering_grading: 7,
					route_grading: 1
				},
				{
					id: 7,
					first_name: 'Merill',
					last_name: 'Olyfant',
					email: 'molyfant6@t.co',
					city: 'Pochep',
					country: 'Russia',
					favourite_location: Math.floor(Math.random() * 8) + 1,
					bouldering_grading: 7,
					route_grading: 1
				},
				{
					id: 8,
					first_name: 'Willard',
					last_name: 'Leaves',
					email: 'wleaves7@zdnet.com',
					city: 'Kendaruan',
					country: 'Indonesia',
					favourite_location: Math.floor(Math.random() * 8) + 1,
					bouldering_grading: 7,
					route_grading: 1
				},
				{
					id: 9,
					first_name: 'Saundra',
					last_name: 'Durbann',
					email: 'sdurbann8@livejournal.com',
					city: 'Kaset Wisai',
					country: 'Thailand',
					favourite_location: Math.floor(Math.random() * 8) + 1,
					bouldering_grading: 7,
					route_grading: 1
				}
			])
		);
};