import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', table => {
    table.bigIncrements('id').unsigned().primary();
    table.string('email', 45).notNullable();
    table.string('userid', 55).notNullable();
    table.string('first_name', 45).notNullable();
    table.string('middle_name', 45).notNullable();
    table.string('last_name', 45).notNullable();
    table.string('password', 255).notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}
