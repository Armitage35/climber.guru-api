exports.seed = function(knex) {
	return knex('climb_grade')
		.del()
		.then(() =>
			knex('climb_grade').insert([
				{
					system_id: 2,
					name: '1-2',
					points: 1
				},
				{
					system_id: 2,
					name: '2-3',
					points: 2
				},
				{
					system_id: 2,
					name: 4,
					points: 3
				},
				{
					system_id: 2,
					name: '4+',
					points: 4
				},
				{
					system_id: 2,
					name: '5a',
					points: 5
				},
				{
					system_id: 2,
					name: '5b',
					points: 6
				},
				{
					system_id: 2,
					name: '6a',
					points: 7
				},
				{
					system_id: 2,
					name: '6a+',
					points: 8
				},
				{
					system_id: 2,
					name: '6b',
					points: 9
				},
				{
					system_id: 2,
					name: '6b+',
					points: 10
				},
				{
					system_id: 2,
					name: '6c',
					points: 11
				},
				{
					system_id: 2,
					name: '6c+',
					points: 12
				},
				{
					system_id: 2,
					name: '7a',
					points: 13
				},
				{
					system_id: 2,
					name: '7a+',
					points: 14
				},
				{
					system_id: 2,
					name: '7b',
					points: 15
				},
				{
					system_id: 2,
					name: '7b+',
					points: 16
				},
				{
					system_id: 2,
					name: '7c',
					points: 17
				},
				{
					system_id: 2,
					name: '7c+',
					points: 18
				},
				{
					system_id: 2,
					name: '8a',
					points: 19
				},
				{
					system_id: 2,
					name: '8a+',
					points: 20
				},
				{
					system_id: 2,
					name: '8b',
					points: 21
				},
				{
					system_id: 2,
					name: '8b+',
					points: 22
				},
				{
					system_id: 2,
					name: '8c',
					points: 23
				},
				{
					system_id: 2,
					name: '8c+',
					points: 24
				},
				{
					system_id: 2,
					name: '9a',
					points: 25
				},
				{
					system_id: 4,
					name: 'HVD',
					points: 1
				},
				{
					system_id: 4,
					name: 'MS',
					points: 2
				},
				{
					system_id: 4,
					name: 'S',
					points: 3
				},
				{
					system_id: 4,
					name: 'VS',
					points: 4
				},
				{
					system_id: 4,
					name: 'HVS',
					points: 5
				},
				{
					system_id: 4,
					name: 'E1 5b',
					points: 7
				},
				{
					system_id: 4,
					name: 'E2 5c',
					points: 8
				},
				{
					system_id: 4,
					name: 'E3 5c',
					points: 10
				},
				{
					system_id: 4,
					name: 'E4 6a',
					points: 12
				},
				{
					system_id: 4,
					name: 'E5 6b',
					points: 14
				},
				{
					system_id: 4,
					name: 'E6 6b',
					points: 16
				},
				{
					system_id: 4,
					name: 'E7 6c',
					points: 19
				},
				{
					system_id: 4,
					name: 'E8 7a',
					points: 21
				},
				{
					system_id: 4,
					name: 'E9 7b',
					points: 23
				},
				{
					system_id: 4,
					name: 'E10 7c',
					points: 25
				},
				{
					system_id: 3,
					name: '8-9',
					points: 1
				},
				{
					system_id: 3,
					name: '10-12',
					points: 2
				},
				{
					system_id: 3,
					name: '13-',
					points: 3
				},
				{
					system_id: 3,
					name: '13+',
					points: 4
				},
				{
					system_id: 3,
					name: '14',
					points: 5
				},
				{
					system_id: 3,
					name: '15',
					points: 6
				},
				{
					system_id: 3,
					name: '19',
					points: 7
				},
				{
					system_id: 3,
					name: '19/20',
					points: 8
				},
				{
					system_id: 3,
					name: '20',
					points: 9
				},
				{
					system_id: 3,
					name: '21',
					points: 10
				},
				{
					system_id: 3,
					name: '21/22',
					points: 11
				},
				{
					system_id: 3,
					name: '22',
					points: 12
				},
				{
					system_id: 3,
					name: '23',
					points: 13
				},
				{
					system_id: 3,
					name: '24',
					points: 14
				},
				{
					system_id: 3,
					name: '25',
					points: 15
				},
				{
					system_id: 3,
					name: '26',
					points: 16
				},
				{
					system_id: 3,
					name: '27',
					points: 17
				},
				{
					system_id: 3,
					name: '28',
					points: 18
				},
				{
					system_id: 3,
					name: '29',
					points: 19
				},
				{
					system_id: 3,
					name: '30',
					points: 20
				},
				{
					system_id: 3,
					name: '31',
					points: 21
				},
				{
					system_id: 3,
					name: '32',
					points: 22
				},
				{
					system_id: 3,
					name: '33',
					points: 23
				},
				{
					system_id: 3,
					name: '34',
					points: 24
				},
				{
					system_id: 3,
					name: '35',
					points: 25
				},
				{
					system_id: 6,
					name: 'I-II',
					points: 1
				},
				{
					system_id: 6,
					name: 'III',
					points: 2
				},
				{
					system_id: 6,
					name: 'IV',
					points: 3
				},
				{
					system_id: 6,
					name: 'V-',
					points: 4
				},
				{
					system_id: 6,
					name: 'V',
					points: 5
				},
				{
					system_id: 6,
					name: 'V+',
					points: 6
				},
				{
					system_id: 6,
					name: 'VI+',
					points: 7
				},
				{
					system_id: 6,
					name: 'VI+/VII-',
					points: 8
				},
				{
					system_id: 6,
					name: 'VII',
					points: 9
				},
				{
					system_id: 6,
					name: 'VII+',
					points: 10
				},
				{
					system_id: 6,
					name: 'VII+/VIII-',
					points: 11
				},
				{
					system_id: 6,
					name: 'VIII-',
					points: 12
				},
				{
					system_id: 6,
					name: 'VIII',
					points: 13
				},
				{
					system_id: 6,
					name: 'VIII/VIII+',
					points: 14
				},
				{
					system_id: 6,
					name: 'VIII+',
					points: 15
				},
				{
					system_id: 6,
					name: 'IX-',
					points: 16
				},
				{
					system_id: 6,
					name: 'IX',
					points: 17
				},
				{
					system_id: 6,
					name: 'IX/IX+',
					points: 18
				},
				{
					system_id: 6,
					name: 'IX+',
					points: 19
				},
				{
					system_id: 6,
					name: 'X-',
					points: 20
				},
				{
					system_id: 6,
					name: 'x',
					points: 21
				},
				{
					system_id: 6,
					name: 'X/X+',
					points: 22
				},
				{
					system_id: 6,
					name: 'X+',
					points: 23
				},
				{
					system_id: 6,
					name: 'XI-',
					points: 24
				},
				{
					system_id: 6,
					name: 'XI',
					points: 25
				},
				{
					system_id: 1,
					name: 5.2,
					points: 1
				},
				{
					system_id: 1,
					name: 5.3,
					points: 1
				},
				{
					system_id: 1,
					name: '5.4-5',
					points: 2
				},
				{
					system_id: 1,
					name: 5.6,
					points: 3
				},
				{
					system_id: 1,
					name: 5.7,
					points: 4
				},
				{
					system_id: 1,
					name: 5.8,
					points: 5
				},
				{
					system_id: 1,
					name: 5.9,
					points: 6
				},
				{
					system_id: 1,
					name: '5.10a',
					points: 7
				},
				{
					system_id: 1,
					name: '5.10b',
					points: 8
				},
				{
					system_id: 1,
					name: '5.10c',
					points: 9
				},
				{
					system_id: 1,
					name: '5.10d',
					points: 10
				},
				{
					system_id: 1,
					name: '5.11a',
					points: 11
				},
				{
					system_id: 1,
					name: '5.11b',
					points: 12
				},
				{
					system_id: 1,
					name: '5.11c',
					points: 13
				},
				{
					system_id: 1,
					name: '5.11d',
					points: 13
				},
				{
					system_id: 1,
					name: '5.12a',
					points: 14
				},
				{
					system_id: 1,
					name: '5.12b',
					points: 15
				},
				{
					system_id: 1,
					name: '5.12c',
					points: 16
				},
				{
					system_id: 1,
					name: '5.12d',
					points: 17
				},
				{
					system_id: 1,
					name: '5.13a',
					points: 18
				},
				{
					system_id: 1,
					name: '5.13b',
					points: 19
				},
				{
					system_id: 1,
					name: '5.13c',
					points: 20
				},
				{
					system_id: 1,
					name: '5.13d',
					points: 21
				},
				{
					system_id: 1,
					name: '5.14a',
					points: 22
				},
				{
					system_id: 1,
					name: '5.14b',
					points: 23
				},
				{
					system_id: 1,
					name: '5.14c',
					points: 24
				},
				{
					system_id: 1,
					name: '5.14d',
					points: 25
				},
				{
					system_id: 1,
					name: 5.15,
					points: 25
				},
				{
					system_id: 7,
					name: 'V0',
					points: 6
				},
				{
					system_id: 7,
					name: 'V0+',
					points: 8
				},
				{
					system_id: 7,
					name: 'V1',
					points: 9
				},
				{
					system_id: 7,
					name: 'V2',
					points: 11
				},
				{
					system_id: 7,
					name: 'V3',
					points: 12
				},
				{
					system_id: 7,
					name: 'V4',
					points: 14
				},
				{
					system_id: 7,
					name: 'V5',
					points: 15
				},
				{
					system_id: 7,
					name: 'V6',
					points: 16
				},
				{
					system_id: 7,
					name: 'V7',
					points: 18
				},
				{
					system_id: 7,
					name: 'V8',
					points: 19
				},
				{
					system_id: 7,
					name: 'V9',
					points: 21
				},
				{
					system_id: 7,
					name: 'V10',
					points: 22
				},
				{
					system_id: 7,
					name: 'V11',
					points: 23
				},
				{
					system_id: 7,
					name: 'V12',
					points: 24
				},
				{
					system_id: 7,
					name: 'V13',
					points: 24
				},
				{
					system_id: 5,
					name: 'B1',
					points: 6
				},
				{
					system_id: 5,
					name: 'B2',
					points: 8
				},
				{
					system_id: 5,
					name: 'B3',
					points: 9
				},
				{
					system_id: 5,
					name: 'B4',
					points: 11
				},
				{
					system_id: 5,
					name: 'B5-6',
					points: 13
				},
				{
					system_id: 5,
					name: 'B7',
					points: 16
				},
				{
					system_id: 5,
					name: 'B8',
					points: 18
				},
				{
					system_id: 5,
					name: 'B9',
					points: 20
				},
				{
					system_id: 5,
					name: 'B10',
					points: 22
				},
				{
					system_id: 5,
					name: 'B12',
					points: 24
				},
				{
					system_id: 8,
					name: '4',
					points: 6
				},
				{
					system_id: 8,
					name: '4+',
					points: 8
				},
				{
					system_id: 8,
					name: '5',
					points: 9
				},
				{
					system_id: 8,
					name: '6a',
					points: 11
				},
				{
					system_id: 8,
					name: '6a+',
					points: 12
				},
				{
					system_id: 8,
					name: '6b/c',
					points: 14
				},
				{
					system_id: 8,
					name: '6c',
					points: 15
				},
				{
					system_id: 8,
					name: '6c+',
					points: 16
				},
				{
					system_id: 8,
					name: '7a',
					points: 17
				},
				{
					system_id: 8,
					name: '7a+',
					points: 18
				},
				{
					system_id: 8,
					name: '7b',
					points: 19
				},
				{
					system_id: 8,
					name: '7c',
					points: 20
				},
				{
					system_id: 8,
					name: '7c+',
					points: 22
				},
				{
					system_id: 8,
					name: '8a+',
					points: 24
				}
			])
		);
};
