import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('blog_user', (table) => {
        table.increments('userID');

        table.string('username')
            .notNullable();

        table.string('password')
            .notNullable();
        
        table.string('firstName');

        table.string('lastName');

        table.string('email')
            .notNullable();

        table.string('createdAt')
            .defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('user');
}

