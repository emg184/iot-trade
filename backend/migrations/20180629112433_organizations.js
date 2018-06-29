exports.up = function(knex, Promise) {
  return knex.schema.createTable('organizations', function(table){
    table.increments('organization_id').notNullable();
    table.string('image_url');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('organizations');
};
