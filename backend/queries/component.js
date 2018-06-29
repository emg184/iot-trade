var knex = require("../knex.js");

function Components() {
  return knex('components');
}

function saveComponent(component_id, values) {
  return Components()
          .insert({
            'image_url': component_id,
            'values': values
          })
}

function getDeviceResults(device_id) {
  return Results()
          .where({
            'device_id': device_id
          })
}

function getComponentDevices(component_id) {
  return knex.select('*')
          .from('components')
            .where({
              'component_id': component_id
            })
            .leftOuterJoin('devices', 'components.component_id', 'devices.device_id')
}

module.exports = {
  mainPumpData: mainPumpData,
  Results: Results,
  saveResults: saveResults,
  getDeviceResults,
  getComponentDevices
}
