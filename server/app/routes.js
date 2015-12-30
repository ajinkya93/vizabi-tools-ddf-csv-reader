var _ = require('lodash');
var path = require('path');
var config = require('../config');
var data = require('./data');

var express = require('express');
var compression = require('compression');

var BASEURL = '/tools/';

var http = require('http');
var url = require('url');
var request = require('request');

module.exports = function (app) {
  var router = express.Router();
  /* API Routes */

  router.get('/item', compression(), function (req, res) {
    return res.json(data.items);
  });

  router.get('/menu', compression(), function (req, res) {
    return res.json(data.menu);
  });

  var base = path.join(BASEURL, 'api');
  app.use(base, router);

  var valueKey = {
    'translation/:lang': function (req, res) {
      return res.json(data.translation);
    },
    'waffles/metadata.json': function (req, res) {
      return res.json(data.metadata);
    },
    'mc_precomputed_shapes.json': function (req, res) {
      return res.json({});
    }
  };

  _.forEach(valueKey, function (value, key) {
    app.get('/api/static/data/' + key, compression(), valueKey[key]);
  });

  /* APP Routes */
  app.get('/', function (req, res) {
    return res.sendFile(path.resolve('./client/dist' + BASEURL + 'redirect.html'));
  });

  app.get('*', function (req, res) {
    return res.sendFile(path.resolve('./client/dist' + BASEURL + 'index.html'));
    // load the single view file
  });
};
