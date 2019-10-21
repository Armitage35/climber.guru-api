exports.up = knex =>
	knex.schema.createTable('climb_performance', tbl => {
		tbl.increments().primary();
		tbl.string('name').notNullable();
		tbl.decimal('coeficient').notNullable();
	});

exports.down = knex => knex.schema.dropTableIfExists('climb_performance');
