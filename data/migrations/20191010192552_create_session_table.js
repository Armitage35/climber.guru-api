exports.up = knex =>
	knex.schema.createTable('session', tbl => {
		tbl.increments().primary();
		tbl.integer('account_id')
			.references('id')
			.inTable('account')
			.index()
			.notNullable()
			.onDelete('CASCADE');
		tbl.string('photo', 128);
		tbl.date('date')
			.notNullable()
			.defaultTo(knex.fn.now());
	});

exports.down = knex => knex.schema.dropTableIfExists('session');
