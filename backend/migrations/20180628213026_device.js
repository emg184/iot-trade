exports.up = function(knex, Promise) {
  return knex.schema.createTable('devices', function(table){
    table.increments('device_id').notNullable();
    table.integer('component_id').notNullable().references("components.component_id");
    table.text('values');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('devices');
};
