exports.seed = function(knex) {
	return knex('climb_grade')
		.del()
		.then(() =>
			knex('climb_grade').insert([
				{
					system_id: 2,
					grade_name: '1-2',
					points: 1
				},
				{
					system_id: 2,
					grade_name: '2-3',
					points: 2
				},
				{
					system_id: 2,
					grade_name: 4,
					points: 3
				},
				{
					system_id: 2,
					grade_name: '4+',
					points: 4
				},
				{
					system_id: 2,
					grade_name: '5a',
					points: 5
				},
				{
					system_id: 2,
					grade_name: '5b',
					points: 6
				},
				{
					system_id: 2,
					grade_name: '6a',
					points: 7
				},
				{
					system_id: 2,
					grade_name: '6a+',
					points: 8
				},
				{
					system_id: 2,
					grade_name: '6b',
					points: 9
				},
				{
					system_id: 2,
					grade_name: '6b+',
					points: 10
				},
				{
					system_id: 2,
					grade_name: '6c',
					points: 11
				},
				{
					system_id: 2,
					grade_name: '6c+',
					points: 12
				},
				{
					system_id: 2,
					grade_name: '7a',
					points: 13
				},
				{
					system_id: 2,
					grade_name: '7a+',
					points: 14
				},
				{
					system_id: 2,
					grade_name: '7b',
					points: 15
				},
				{
					system_id: 2,
					grade_name: '7b+',
					points: 16
				},
				{
					system_id: 2,
					grade_name: '7c',
					points: 17
				},
				{
					system_id: 2,
					grade_name: '7c+',
					points: 18
				},
				{
					system_id: 2,
					grade_name: '8a',
					points: 19
				},
				{
					system_id: 2,
					grade_name: '8a+',
					points: 20
				},
				{
					system_id: 2,
					grade_name: '8b',
					points: 21
				},
				{
					system_id: 2,
					grade_name: '8b+',
					points: 22
				},
				{
					system_id: 2,
					grade_name: '8c',
					points: 23
				},
				{
					system_id: 2,
					grade_name: '8c+',
					points: 24
				},
				{
					system_id: 2,
					grade_name: '9a',
					points: 25
				},
				{
					system_id: 4,
					grade_name: 'HVD',
					points: 1
				},
				{
					system_id: 4,
					grade_name: 'MS',
					points: 2
				},
				{
					system_id: 4,
					grade_name: 'S',
					points: 3
				},
				{
					system_id: 4,
					grade_name: 'VS',
					points: 4
				},
				{
					system_id: 4,
					grade_name: 'HVS',
					points: 5
				},
				{
					system_id: 4,
					grade_name: 'E1 5b',
					points: 7
				},
				{
					system_id: 4,
					grade_name: 'E2 5c',
					points: 8
				},
				{
					system_id: 4,
					grade_name: 'E3 5c',
					points: 10
				},
				{
					system_id: 4,
					grade_name: 'E4 6a',
					points: 12
				},
				{
					system_id: 4,
					grade_name: 'E5 6b',
					points: 14
				},
				{
					system_id: 4,
					grade_name: 'E6 6b',
					points: 16
				},
				{
					system_id: 4,
					grade_name: 'E7 6c',
					points: 19
				},
				{
					system_id: 4,
					grade_name: 'E8 7a',
					points: 21
				},
				{
					system_id: 4,
					grade_name: 'E9 7b',
					points: 23
				},
				{
					system_id: 4,
					grade_name: 'E10 7c',
					points: 25
				},
				{
					system_id: 3,
					grade_name: '8-9',
					points: 1
				},
				{
					system_id: 3,
					grade_name: '10-12',
					points: 2
				},
				{
					system_id: 3,
					grade_name: '13-',
					points: 3
				},
				{
					system_id: 3,
					grade_name: '13+',
					points: 4
				},
				{
					system_id: 3,
					grade_name: '14',
					points: 5
				},
				{
					system_id: 3,
					grade_name: '15',
					points: 6
				},
				{
					system_id: 3,
					grade_name: '19',
					points: 7
				},
				{
					system_id: 3,
					grade_name: '19/20',
					points: 8
				},
				{
					system_id: 3,
					grade_name: '20',
					points: 9
				},
				{
					system_id: 3,
					grade_name: '21',
					points: 10
				},
				{
					system_id: 3,
					grade_name: '21/22',
					points: 11
				},
				{
					system_id: 3,
					grade_name: '22',
					points: 12
				},
				{
					system_id: 3,
					grade_name: '23',
					points: 13
				},
				{
					system_id: 3,
					grade_name: '24',
					points: 14
				},
				{
					system_id: 3,
					grade_name: '25',
					points: 15
				},
				{
					system_id: 3,
					grade_name: '26',
					points: 16
				},
				{
					system_id: 3,
					grade_name: '27',
					points: 17
				},
				{
					system_id: 3,
					grade_name: '28',
					points: 18
				},
				{
					system_id: 3,
					grade_name: '29',
					points: 19
				},
				{
					system_id: 3,
					grade_name: '30',
					points: 20
				},
				{
					system_id: 3,
					grade_name: '31',
					points: 21
				},
				{
					system_id: 3,
					grade_name: '32',
					points: 22
				},
				{
					system_id: 3,
					grade_name: '33',
					points: 23
				},
				{
					system_id: 3,
					grade_name: '34',
					points: 24
				},
				{
					system_id: 3,
					grade_name: '35',
					points: 25
				},
				{
					system_id: 6,
					grade_name: 'I-II',
					points: 1
				},
				{
					system_id: 6,
					grade_name: 'III',
					points: 2
				},
				{
					system_id: 6,
					grade_name: 'IV',
					points: 3
				},
				{
					system_id: 6,
					grade_name: 'V-',
					points: 4
				},
				{
					system_id: 6,
					grade_name: 'V',
					points: 5
				},
				{
					system_id: 6,
					grade_name: 'V+',
					points: 6
				},
				{
					system_id: 6,
					grade_name: 'VI+',
					points: 7
				},
				{
					system_id: 6,
					grade_name: 'VI+/VII-',
					points: 8
				},
				{
					system_id: 6,
					grade_name: 'VII',
					points: 9
				},
				{
					system_id: 6,
					grade_name: 'VII+',
					points: 10
				},
				{
					system_id: 6,
					grade_name: 'VII+/VIII-',
					points: 11
				},
				{
					system_id: 6,
					grade_name: 'VIII-',
					points: 12
				},
				{
					system_id: 6,
					grade_name: 'VIII',
					points: 13
				},
				{
					system_id: 6,
					grade_name: 'VIII/VIII+',
					points: 14
				},
				{
					system_id: 6,
					grade_name: 'VIII+',
					points: 15
				},
				{
					system_id: 6,
					grade_name: 'IX-',
					points: 16
				},
				{
					system_id: 6,
					grade_name: 'IX',
					points: 17
				},
				{
					system_id: 6,
					grade_name: 'IX/IX+',
					points: 18
				},
				{
					system_id: 6,
					grade_name: 'IX+',
					points: 19
				},
				{
					system_id: 6,
					grade_name: 'X-',
					points: 20
				},
				{
					system_id: 6,
					grade_name: 'x',
					points: 21
				},
				{
					system_id: 6,
					grade_name: 'X/X+',
					points: 22
				},
				{
					system_id: 6,
					grade_name: 'X+',
					points: 23
				},
				{
					system_id: 6,
					grade_name: 'XI-',
					points: 24
				},
				{
					system_id: 6,
					grade_name: 'XI',
					points: 25
				},
				{
					system_id: 1,
					grade_name: 5.2,
					points: 1
				},
				{
					system_id: 1,
					grade_name: 5.3,
					points: 1
				},
				{
					system_id: 1,
					grade_name: '5.4-5',
					points: 2
				},
				{
					system_id: 1,
					grade_name: 5.6,
					points: 3
				},
				{
					system_id: 1,
					grade_name: 5.7,
					points: 4
				},
				{
					system_id: 1,
					grade_name: 5.8,
					points: 5
				},
				{
					system_id: 1,
					grade_name: 5.9,
					points: 6
				},
				{
					system_id: 1,
					grade_name: '5.10a',
					points: 7
				},
				{
					system_id: 1,
					grade_name: '5.10b',
					points: 8
				},
				{
					system_id: 1,
					grade_name: '5.10c',
					points: 9
				},
				{
					system_id: 1,
					grade_name: '5.10d',
					points: 10
				},
				{
					system_id: 1,
					grade_name: '5.11a',
					points: 11
				},
				{
					system_id: 1,
					grade_name: '5.11b',
					points: 12
				},
				{
					system_id: 1,
					grade_name: '5.11c',
					points: 13
				},
				{
					system_id: 1,
					grade_name: '5.11d',
					points: 13
				},
				{
					system_id: 1,
					grade_name: '5.12a',
					points: 14
				},
				{
					system_id: 1,
					grade_name: '5.12b',
					points: 15
				},
				{
					system_id: 1,
					grade_name: '5.12c',
					points: 16
				},
				{
					system_id: 1,
					grade_name: '5.12d',
					points: 17
				},
				{
					system_id: 1,
					grade_name: '5.13a',
					points: 18
				},
				{
					system_id: 1,
					grade_name: '5.13b',
					points: 19
				},
				{
					system_id: 1,
					grade_name: '5.13c',
					points: 20
				},
				{
					system_id: 1,
					grade_name: '5.13d',
					points: 21
				},
				{
					system_id: 1,
					grade_name: '5.14a',
					points: 22
				},
				{
					system_id: 1,
					grade_name: '5.14b',
					points: 23
				},
				{
					system_id: 1,
					grade_name: '5.14c',
					points: 24
				},
				{
					system_id: 1,
					grade_name: '5.14d',
					points: 25
				},
				{
					system_id: 1,
					grade_name: 5.15,
					points: 25
				},
				{
					system_id: 7,
					grade_name: 'V0',
					points: 6
				},
				{
					system_id: 7,
					grade_name: 'V0+',
					points: 8
				},
				{
					system_id: 7,
					grade_name: 'V1',
					points: 9
				},
				{
					system_id: 7,
					grade_name: 'V2',
					points: 11
				},
				{
					system_id: 7,
					grade_name: 'V3',
					points: 12
				},
				{
					system_id: 7,
					grade_name: 'V4',
					points: 14
				},
				{
					system_id: 7,
					grade_name: 'V5',
					points: 15
				},
				{
					system_id: 7,
					grade_name: 'V6',
					points: 16
				},
				{
					system_id: 7,
					grade_name: 'V7',
					points: 18
				},
				{
					system_id: 7,
					grade_name: 'V8',
					points: 19
				},
				{
					system_id: 7,
					grade_name: 'V9',
					points: 21
				},
				{
					system_id: 7,
					grade_name: 'V10',
					points: 22
				},
				{
					system_id: 7,
					grade_name: 'V11',
					points: 23
				},
				{
					system_id: 7,
					grade_name: 'V12',
					points: 24
				},
				{
					system_id: 7,
					grade_name: 'V13',
					points: 24
				},
				{
					system_id: 5,
					grade_name: 'B1',
					points: 6
				},
				{
					system_id: 5,
					grade_name: 'B2',
					points: 8
				},
				{
					system_id: 5,
					grade_name: 'B3',
					points: 9
				},
				{
					system_id: 5,
					grade_name: 'B4',
					points: 11
				},
				{
					system_id: 5,
					grade_name: 'B5-6',
					points: 13
				},
				{
					system_id: 5,
					grade_name: 'B7',
					points: 16
				},
				{
					system_id: 5,
					grade_name: 'B8',
					points: 18
				},
				{
					system_id: 5,
					grade_name: 'B9',
					points: 20
				},
				{
					system_id: 5,
					grade_name: 'B10',
					points: 22
				},
				{
					system_id: 5,
					grade_name: 'B12',
					points: 24
				},
				{
					system_id: 8,
					grade_name: '4',
					points: 6
				},
				{
					system_id: 8,
					grade_name: '4+',
					points: 8
				},
				{
					system_id: 8,
					grade_name: '5',
					points: 9
				},
				{
					system_id: 8,
					grade_name: '6a',
					points: 11
				},
				{
					system_id: 8,
					grade_name: '6a+',
					points: 12
				},
				{
					system_id: 8,
					grade_name: '6b/c',
					points: 14
				},
				{
					system_id: 8,
					grade_name: '6c',
					points: 15
				},
				{
					system_id: 8,
					grade_name: '6c+',
					points: 16
				},
				{
					system_id: 8,
					grade_name: '7a',
					points: 17
				},
				{
					system_id: 8,
					grade_name: '7a+',
					points: 18
				},
				{
					system_id: 8,
					grade_name: '7b',
					points: 19
				},
				{
					system_id: 8,
					grade_name: '7c',
					points: 20
				},
				{
					system_id: 8,
					grade_name: '7c+',
					points: 22
				},
				{
					system_id: 8,
					grade_name: '8a+',
					points: 24
				}
			])
		);
};
