exports.up = function(knex, Promise) {
  return knex.schema.createTable('pinch_results', function(table){
    table.increments();
    table.integer('device_id').notNullable().references("devices.device_id");
    table.float('value').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pinch_results');
};
