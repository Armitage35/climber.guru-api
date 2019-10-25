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
					bouldering_grading: 7,
					route_grading: 1
				}
			])
		);
};
