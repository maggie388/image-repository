const TABLE_NAME = 'users';

exports.up = (knex) => {
    return knex.schema.createTable(TABLE_NAME, table => {
        table.increments('id').primary();
        table.string('google_id').unique();
        table.string('first_name');
        table.string('last_name');
        table.string('email').unique();
        table.string('password');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable(TABLE_NAME);
};
