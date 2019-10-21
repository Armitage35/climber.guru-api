exports.up = knex =>
	knex.schema.createTable('account', tbl => {
		tbl.increments().primary();
		tbl.string('first_name', 128);
		tbl.string('last_name', 128);
		tbl.string('email', 128)
			.notNullable()
			.unique();
		tbl.string('city', 128);
		tbl.string('country', 128);
		tbl.integer('preferred_climb_type', 128);
		tbl.string('avatar', 128);
		tbl.string('cover_picture', 128);
		tbl.integer('favourite_location')
			.references('id')
			.inTable('location')
			.index();
		tbl.integer('bouldering_grading')
			.references('id')
			.inTable('grading_system')
			.notNullable()
			.index();
		tbl.integer('route_grading')
			.references('id')
			.inTable('grading_system')
			.notNullable()
			.index();
		tbl.timestamp('created_on', 128)
			.notNullable()
			.defaultTo(knex.fn.now());
	});

exports.down = knex => knex.schema.dropTableIfExists('account');
