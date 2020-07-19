import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('test_knex_migrations', (table) => {
        table.increments('test_id');
        table.timestamp('created_at').notNullable();
        table.string('name').notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('test_knex_migrations');
}

