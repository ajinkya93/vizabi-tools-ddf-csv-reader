var _ = require('lodash');
var Vizabi = require('vizabi');

var ddfUtils = require('./vizabi-ddf-utils');
var queryTemplate = require('./templates/query').queryTemplate;
var metadataTemplate = require('./templates/metadata').metadataTemplate;
var translationsTemplate = require('./templates/translations').translationsTemplate;

function safeApply(scope, fn) {
  var phase = scope.$root.$$phase;
  if (phase == '$apply' || phase == '$digest') {
    scope.$eval(fn);
  } else {
    scope.$apply(fn);
  }
}

module.exports = function (app) {
  app
    .controller('gapminderToolsCtrl', [
      '$scope', '$timeout',
      function ($scope, $timeout) {
        $scope.lastTab = -1;
        $scope.tabs = [];

        $scope.ddf = {
          url: 'https://raw.githubusercontent.com/valor-software/ddf--gapminder--systema_globalis/master',
          type: 'BubbleChart',
          types: [
            {value: 'BubbleChart', name: 'Bubble Chart'},
            {value: 'MountainChart', name: 'Mountain Chart'},
            {value: 'BubbleMap', name: 'Bubble Map'}
          ],
          measures: [],
          dimensions: [],
          popup: false,
          xAxis: '',
          yAxis: '',
          sizeAxis: ''
        };

        $scope.setTab = function (tabId) {
          $scope.currentTab = tabId;
        };

        $scope.loadDdf = function () {
          ddfUtils.getDimensions($scope.ddf.url, function (err, result) {
            if (err) {
              console.log(err);
              return;
            }

            $scope.ddf.dimensions = result;

            ddfUtils.getMeasures($scope.ddf.url, function (err, result) {
              if (err) {
                console.log(err);
                return;
              }

              safeApply($scope, function () {
                $scope.ddf.measures = result.filter(function (v) {
                  return !!v.measure;
                });
                $scope.ddf.popup = true;
              });
            });
          });
        };

        $scope.closeDdf = function () {
          $scope.ddf.popup = false;
        };

        $scope.openDdf = function () {
          var queryObj = queryTemplate[$scope.ddf.type];
          if ($scope.tabs.length === 0) {
            //if there are no tabs - create one
            $scope.newTab();
          }
          //render graph when tab is rendered
          $timeout(function () {
            if ($scope.ddf.type === 'BubbleChart' || $scope.ddf.type === 'MountainChart') {
              queryObj.data.path = $scope.ddf.url;
              queryObj.state.marker.axis_y.which = $scope.ddf.yAxis;
              queryObj.state.marker.axis_x.which = $scope.ddf.xAxis;
              queryObj.state.marker.size.which = $scope.ddf.sizeAxis;
            }

            if ($scope.ddf.type === 'BubbleMap') {
              queryObj.state.marker.size.which = $scope.ddf.sizeAxis;
            }

            $scope.ddf.dimensions.forEach(function (dimension) {
              var name = dimension.type === 'dimension' ?
                dimension.concept : dimension.subdim_of + '.' + dimension.concept;
              metadataTemplate.indicatorsDB[name] = {
                allowCharts: ['*'],
                use: 'property',
                unit: '',
                scales: ['ordinal'],
                sourceLink: dimension.link || ''
              };
            });

            var measuresPlain = [];
            $scope.ddf.measures.forEach(function (measure) {
              measuresPlain.push(measure.measure);
              metadataTemplate.indicatorsDB[measure.measure] = {
                allowCharts: ['mountainchart', 'bubblechart', 'bubblemap'],
                use: 'indicator',
                unit: measure.unit,
                scales: ['linear'],
                sourceLink: ''
              };
              // todo: temporary solution: consider real
              metadataTemplate.indicatorsTree.children[2].children.push({
                id: measure.measure
              });

              translationsTemplate['indicator/' + measure.measure] = measure.name;
              translationsTemplate['unit/' + measure.unit] = measure.unit;
            });

            metadataTemplate.indicatorsDB._default = {
              allowCharts: ['*'],
              use: 'constant',
              unit: '',
              scales: ['ordinal'],
              sourceLink: ''
            };

            $scope.ddf.popup = false;

            Vizabi.Tool.define('preload', function (promise) {
              Vizabi._globals.metadata = metadataTemplate;
              Vizabi._globals.metadata.indicatorsArray = measuresPlain;
              this.model.language.strings.set(this.model.language.id, translationsTemplate);
              promise.resolve();
            });

            queryObj.data.ddfPath = $scope.ddf.url;
            var placeholder = document.getElementById('vizabi-placeholder');
            Vizabi($scope.ddf.type, placeholder, queryObj);
          }, 0);
        };

        $scope.newTab = function () {
          ++$scope.lastTab;
          $scope.tabs.push({id: $scope.lastTab});
          $scope.setTab($scope.lastTab);
        };

        $scope.closeTab = function (tabId) {
          if (tabId === $scope.currentTab) {
            --$scope.currentTab;
          }
          $scope.tabs = _.without($scope.tabs, _.findWhere($scope.tabs, {id: tabId}));
        };
      }]);
};
