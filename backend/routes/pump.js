const queries = require("../queries/pump");

module.exports = app => {
  app.post('/pump', function(req, res, next) {
    pumps = JSON.parse(req.body.pumps)
    Promise.all(pumps.map( x =>
      queries.saveResults(x.device_id, x.level, x.value)
    ))
      .then(function(result) {
        res.json(result);
      })
  });
  app.get('/pump', function(req, res, next) {
    queries.Results().then(result =>
    res.json(result));
  });
  app.get('/pump/:pumpId', function(req, res, next) {
    console.log('here')
    queries.getDeviceResults(req.params.pumpId)
      .then(result => {
        res.json(result)
      });
    });
};
