var path = require('path');

module.exports = function (app) {

  app.get('/preview/data/mc_precomputed_shapes.json', function (req, res) {
    return res.sendFile(path.resolve('./server/data/mc_precomputed_shapes.json'));
  });

  app.get('/preview/data/world-50m.json', function (req, res) {
    return res.sendFile(path.resolve('./server/data/world-50m.json'));
  });
};
