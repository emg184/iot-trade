var knex = require("../knex.js");

function Results() {
  return knex('pump_results');
}

function mainPumpData() {
  return Results()
}

function saveResults(device_id, level, value) {
  return Results()
          .insert({
            'device_id': device_id,
            'level': level,
            'value': parseFloat(value)
          })
}

function getDeviceResults(device_id) {
  return Results()
          .where({
            'device_id': device_id
          })
}

module.exports = {
  mainPumpData: mainPumpData,
  Results: Results,
  saveResults: saveResults,
  getDeviceResults
}
