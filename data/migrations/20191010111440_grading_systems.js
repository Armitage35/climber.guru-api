exports.up = knex =>
	knex.schema.createTable('grading_system', tbl => {
		tbl.increments().primary();
		tbl.string('name', 128).notNullable();
		tbl.string('climb_type', 128).notNullable();
		tbl.integer('coeficient').notNullable();
	});

exports.down = knex => knex.schema.dropTableIfExists('grading_system');
