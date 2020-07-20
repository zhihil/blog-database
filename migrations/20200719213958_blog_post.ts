import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('blog_post', (table) => {
        table.increments('postID');
        
        table.integer('authorID').notNullable();
        table.foreign('authorID').references('blog_user.userID');

        table.text('text').notNullable();

        table.timestamp('createdAt')
            .defaultTo(knex.fn.now());

        table.timestamp('lastModified')
            .defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('blogPost');
}

