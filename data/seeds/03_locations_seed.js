exports.seed = function(knex) {
	return knex('location')
		.del()
		.then(() =>
			knex('location').insert([
				{
					name: 'Bloc Shop - Chabanel',
					address: '1370 Rue Chabanel O',
					city: 'Montreal',
					country: 'Canada',
					zip_code: 'H4N 1H4',
					main_climb_type: 'bouldering'
				},
				{
					name: 'Bloc Shop - Hochelaga',
					address: '2985 Rue Sainte-Catherine E',
					city: 'Montreal',
					country: 'Canada',
					zip_code: 'H1W 3Y8',
					main_climb_type: 'bouldering'
				},
				{
					name: 'Zero Gravite',
					address: '4519 Avenue Papineau',
					city: 'Montreal',
					country: 'Canada',
					zip_code: 'H2H 1V4',
					main_climb_type: 'route'
				},
				{
					name: 'Allez Up',
					address: '1555 Rue Saint-Patrick',
					city: 'Montreal',
					country: 'Canada',
					zip_code: 'H3K 2B7',
					main_climb_type: 'route'
				},
				{
					name: 'Nomad bloc',
					address: '4200 Rue Molson',
					city: 'Montreal',
					country: 'Canada',
					zip_code: 'H1Y 3L1',
					main_climb_type: 'bouldering'
				},
				{
					name: 'Shakti Rock Gym',
					address: '175 Rue Saint Viateur E',
					city: 'Montreal',
					country: 'Canada',
					zip_code: 'H2T 1B4',
					main_climb_type: 'bouldering'
				},
				{
					name: 'Le Mouv',
					address: '3811 Rue Everett',
					city: 'Montreal',
					country: 'Canada',
					zip_code: 'H2A 1S8',
					main_climb_type: 'bouldering'
				},
				{
					name: 'Beta Bloc',
					address: '2180 Boul Hymus',
					city: 'Dorval',
					country: 'Canada',
					zip_code: 'H9P 1J7',
					main_climb_type: 'bouldering'
				}
			])
		);
};
