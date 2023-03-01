import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('recruits', table => {
        table.bigIncrements('id').unsigned().primary();
        table.string('first_name', 255).notNullable();
        table.string('middle_name', 255).nullable();
        table.string('last_name', 255).notNullable();
        table.string('suffix', 25).nullable();
        table.string('mobile_number', 255).notNullable();
        table.string('email', 255).notNullable();
        table.string('province', 255).notNullable();
        table.string('city', 255).notNullable();
        table.boolean('isPlanToAttend').notNullable();
        table.string('bop', 255).nullable();
        table.boolean('isRecruit').notNullable();
        table.string('recruiter', 255).nullable();
        table.string('branch', 255).nullable();
        table.string('isPresent', 255).nullable();
        table.timestamps(true, true);
      });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('recruits');
}

