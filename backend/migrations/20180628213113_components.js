exports.up = function(knex, Promise) {
  return knex.schema.createTable('components', function(table){
    table.increments('component_id').notNullable();
    table.string('image_url');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('components');
};
