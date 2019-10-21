pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log stop
pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
knex migrate:rollback
knex migrate:latest
knex seed:run
