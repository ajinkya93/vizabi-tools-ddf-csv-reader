var d3 = require('d3');
var Vizabi = require('vizabi');
var urlon = require('URLON');

module.exports = function (app) {
  var bases = document.getElementsByTagName('base');
  var baseHref = null;
  if (bases.length > 0) {
    baseHref = bases[0].href;
  }

  function formatDate(date, unit) {
    var timeFormats = {
      "year": d3.time.format("%Y"),
      "month": d3.time.format("%Y-%m"),
      "week": d3.time.format("%Y-W%W"),
      "day": d3.time.format("%Y-%m-%d"),
      "hour": d3.time.format("%Y-%m-%d %H"),
      "minute": d3.time.format("%Y-%m-%d %H:%M"),
      "second": d3.time.format("%Y-%m-%d %H:%M:%S")
    };
    return timeFormats[unit](date);
  }

  function formatDates(state) {
    // Format date objects according to the unit
    if (state && state.time) {
      var unit = state.time.unit || "year";
      if (typeof state.time.value === 'object') {
        state.time.value = formatDate(state.time.value, unit);
      }
      if (typeof state.time.start === 'object') {
        state.time.start = formatDate(state.time.start, unit);
      }
      if (typeof state.time.end === 'object') {
        state.time.end = formatDate(state.time.end, unit);
      }
    }
  }

  app
    .factory("vizabiFactory", [
      function () {
        return {
          /**
           * Render Vizabi
           * @param {String} tool name of the tool
           * @param {DOMElement} placeholder
           * @return {Object}
           */
          render: function (tool, placeholder, options) {
            var loc = window.location.toString();
            var hash = null;
            if (loc.indexOf('#') >= 0) {
              hash = loc.substring(loc.indexOf('#') + 1);
            }

            if (hash) {
              var str = encodeURI(decodeURIComponent(hash));
              var state = urlon.parse(str);
              options.language = {};
              options.language.id = state.id || 'en';
              options.state = state;
            }

            options.bind = options.bind || {};
            options.bind.historyUpdate = onHistoryUpdate;
            function onHistoryUpdate(eventName, state) {
              formatDates(state);
              window.location.hash = urlon.stringify(state);
            }

            options.state = {
              time: {
                start: "1800",
                end: "2015",
                value: "2015",
                step: 1,
                formatInput: "%Y",
                trails: true,
                lockNonSelected: 0,
                adaptMinMaxZoom: false
              },
              entities: {
                dim: "geo",
                show: {
                  "geo.cat": ["country"]
                }
              },
              marker: {
                space: ["entities", "time"],
                type: "geometry",
                shape: "circle",
                label: {
                  use: "property",
                  which: "geo.name"
                },
                axis_y: {
                  use: "indicator",
                  which: "fertility_rate",
                  scaleType: "linear",
                  allow: {
                    scales: ["linear", "log"]
                  }
                },
                axis_x: {
                  use: "indicator",
                  which: "life_expectancy",
                  scaleType: "log",
                  allow: {
                    scales: ["linear", "log"]
                  }
                },
                color: {
                  use: "property",
                  which: "geo.region",
                  scaleType: "ordinal",
                  allow: {
                    names: ["!geo.name"]
                  },
                  palette: {
                    "asia": "#FF5872",
                    "europe": "#FFE700",
                    "americas": "#7FEB00",
                    "africa": "#00D5E9",
                    "_default": "#ffb600"
                  }
                },
                size: {
                  use: "indicator",
                  which: "population",
                  scaleType: "linear",
                  allow: {
                    scales: ["linear", "log"]
                  },
                  min: .04,
                  max: .90
                }
              }
            };

            return Vizabi(tool, placeholder, options);
          }
        };
      }]);


  app
    .factory("vizabiItems", ['$http', function ($http) {

      return {
        /**
         * Get All Items
         */
        getItems: function () {
          //return the promise directly.
          return $http.get(baseHref + 'api/item')
            .then(function (result) {
              var items = {}, i, s;
              for (i = 0, s = result.data.length; i < s; i++) {
                items[result.data[i].slug] = result.data[i];
              }
              return items;
            });
        }
      };

    }]);

  app
    .factory('menuFactory', [
      '$location', '$q', '$http',
      function ($location, $q, $http) {

        return {
          cached: [],

          /**
           * Get All Items
           */
          getMenu: function () {
            //return the promise directly.
            var _this = this;
            return $http.get(baseHref + 'api/menu')
              .then(function (result) {
                if (result.status === 200) {
                  _this.cached = result.data.children;
                }
                return _this.getCachedMenu();
              });
          },

          /**
           * Returns the home tree data.
           * @returns {}
           */
          getCachedMenu: function () {
            return this.cached;
          },

          /**
           * Returns the current URL.
           * @returns {string}
           */
          getCurrentUrl: function () {
            return $location.$$path;
          }
        };
      }]);
};
