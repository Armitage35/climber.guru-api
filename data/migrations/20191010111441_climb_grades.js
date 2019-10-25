exports.up = knex =>
	knex.schema.createTable('climb_grade', tbl => {
		tbl.increments().primary();
		tbl.integer('system_id')
			.references('id')
			.inTable('grading_system')
			.index()
			.notNullable();
		tbl.string('grade_name', 128).notNullable();
		tbl.integer('points').notNullable();
		tbl.string('type');
	});

exports.down = knex => knex.schema.dropTableIfExists('climb_grade');
