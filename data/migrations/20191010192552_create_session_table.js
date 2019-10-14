exports.up = (knex) => knex.schema.createTable('session', (tbl) => {
	tbl.increments().primary();
	tbl.integer('user_id')
		.references('id')
		.inTable('user')
		.index()
		.notNullable()
		.onDelete('CASCADE');
	tbl.integer('location', 128).notNullable();
	tbl.integer('climb_type', 128).notNullable();
	tbl.string('photo', 128);
	tbl.string('grading_system', 128).notNullable();
	tbl.timestamp('created_on', 128).notNullable().defaultTo(knex.fn.now());
});

exports.down = (knex) => knex.schema.dropTableIfExists('session');
