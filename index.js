const knex = require("knex")({
    client: "pg",
    connection: {
        host: '127.0.0.1',
        user: 'docker',
        password: 'docker',
        database: 'pg_default'
    }
});

knex.schema.createTable('testKnex', table => {
    table.increments();
    table.string("name");
    table.timestamps();

    process.stdout.write("testKnex table was created");
});

knex('testKnex').insert({
    name: "Slaughterhouse Five"
});

process.stdout.write("Knex script finished executing");
