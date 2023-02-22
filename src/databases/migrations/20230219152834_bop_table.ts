import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('bop', table => {
        table.bigIncrements('id').unsigned().primary();
        table.string('name', 255).notNullable();
        table.string('date', 255).notNullable();
        table.string('venue', 255).notNullable();
        table.timestamps(true, true);
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('bop');
}

