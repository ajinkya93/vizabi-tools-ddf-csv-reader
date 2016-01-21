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

  app.get('/', function (req, res) {
    return res.sendFile(path.resolve('./client/dist' + BASEURL + 'redirect.html'));
  });

  app.get('/preview/data/mc_precomputed_shapes.json', function (req, res) {
    return res.sendFile(path.resolve('./client/dist' + BASEURL + 'config/mc_precomputed_shapes.json'));
  });

  app.get('/preview/data/world-50m.json', function (req, res) {
    return res.sendFile(path.resolve('./client/dist' + BASEURL + 'config/world-50m.json'));
  });

  app.get('*', function (req, res) {
    return res.sendFile(path.resolve('./client/dist' + BASEURL + 'index.html'));
    // load the single view file
  });
};
