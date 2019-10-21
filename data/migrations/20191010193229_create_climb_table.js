exports.up = knex =>
	knex.schema.createTable('climb', tbl => {
		tbl.increments().primary();
		tbl.integer('account_id')
			.references('id')
			.inTable('account')
			.index()
			.notNullable();
		tbl.integer('session_id')
			.references('id')
			.inTable('session')
			.index()
			.notNullable();
		tbl.string('tags', 128);
		tbl.integer('grade')
			.references('id')
			.inTable('climb_grade')
			.index()
			.notNullable();
		tbl.integer('performance')
			.references('id')
			.inTable('climb_performance')
			.notNullable()
			.index();
		tbl.datetime('created_on', 128)
			.notNullable()
			.defaultTo(knex.fn.now());
	});

exports.down = knex => knex.schema.dropTableIfExists('climb');
