exports.up = (knex) => knex.schema.createTable('climb', (tbl) => {
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
	tbl.string('tags', 128).notNullable();
	tbl.integer('grade', 128).notNullable();
	tbl.integer('quality', 128).notNullable();
	tbl.datetime('created_on', 128).notNullable().defaultTo(knex.fn.now());
});

exports.down = (knex) => knex.schema.dropTableIfExists('climb');
