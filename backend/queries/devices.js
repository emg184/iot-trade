var knex = require("../knex.js");

function Devices() {
  return knex('devices');
}

function Components() {
  return knex('components');
}

function saveDevice(component_id, values) {
  return Devices()
          .insert({
            'component_id': component_id,
            'values': values
          })
}

function getDeviceResults(device_id) {
  return Devices()
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
