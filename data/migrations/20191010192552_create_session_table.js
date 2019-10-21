exports.up = knex =>
	knex.schema.createTable('session', tbl => {
		tbl.increments().primary();
		tbl.integer('account_id')
			.references('id')
			.inTable('account')
			.index()
			.notNullable()
			.onDelete('CASCADE');
		tbl.integer('location')
			.references('id')
			.inTable('location')
			.index()
			.notNullable();
		tbl.integer('climb_type', 128).notNullable();
		tbl.string('photo', 128);
		tbl.integer('grading_system')
			.references('id')
			.inTable('grading_system')
			.index()
			.notNullable();
		tbl.timestamp('created_on', 128)
			.notNullable()
			.defaultTo(knex.fn.now());
	});

exports.down = knex => knex.schema.dropTableIfExists('session');
