exports.up = knex =>
	knex.schema.createTable('location', tbl => {
		tbl.increments().primary();
		tbl.string('name').notNullable();
		tbl.string('address').notNullable();
		tbl.string('zip_code').notNullable();
		tbl.string('city').notNullable();
		tbl.string('country').notNullable();
		tbl.string('main_climb_type');
	});

exports.down = knex => knex.schema.dropTableIfExists('location');
