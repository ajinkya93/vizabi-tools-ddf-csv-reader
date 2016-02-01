import {Injectable} from 'angular2/core';

let queryTemplate = require('../templates/query').queryTemplate;
let metadataTemplate = require('../templates/metadata').metadataTemplate;
let translationsTemplate = require('../templates/translations').translationsTemplate;

let ddfCsv = require('../src-js/vizabi-ddf-csv-reader').ddfCsv;

declare var Vizabi;

@Injectable()
export class DataService {
  public static get NEW_TAB_ACTION():string {
    return 'newTab';
  };

  public static get CURRENT_TAB_ACTION():string {
    return 'currentTab';
  };

  public static get SETTINGS_SHOW_ACTION():string {
    return 'settingsShow';
  };

  public static get DO_CHART_ACTION():string {
    return 'doChart';
  };

  public types:Array<{value: string, name: string}> = [
    {value: 'BubbleChart', name: 'Bubble Chart'},
    {value: 'MountainChart', name: 'Mountain Chart'},
    {value: 'BubbleMap', name: 'Bubble Map'}
  ];
  public initDDFURL:string = 'https://raw.githubusercontent.com/valor-software/ddf--gapminder--systema_globalis/master';

  public addChart(ddfSettings, ddfQuery, tabId) {
    let queryObj = queryTemplate[ddfSettings.currentType.value];

    if (ddfSettings.currentType.value === 'BubbleChart' || ddfSettings.currentType.value === 'MountainChart') {
      queryObj.data.path = ddfSettings.url;
      queryObj.state.marker.axis_y.which = ddfQuery.yAxis.measure;
      queryObj.state.marker.axis_x.which = ddfQuery.xAxis.measure;
      queryObj.state.marker.size.which = ddfQuery.sizeAxis.measure;
    }

    if (ddfSettings.currentType.value === 'BubbleMap') {
      queryObj.state.marker.size.which = ddfQuery.sizeAxis.measure;
    }

    ddfQuery.dimensions.forEach((dimension:any) => {
      let name = dimension.type === 'dimension' ?
        dimension.concept : dimension.subdim_of + '.' + dimension.concept;
      metadataTemplate.indicatorsDB[name] = {
        allowCharts: ['*'],
        use: 'property',
        unit: '',
        scales: ['ordinal'],
        sourceLink: dimension.link || ''
      };
    });

    let measuresPlain = [];
    ddfQuery.measures.forEach((measure:any) => {
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

    Vizabi.Tool.define('preload', function (promise) {
      Vizabi._globals.metadata = metadataTemplate;
      Vizabi._globals.metadata.indicatorsArray = measuresPlain;
      this.model.language.strings.set(this.model.language.id, translationsTemplate);
      promise.resolve();
    });

    Vizabi.Reader.extend('ddfcsv', ddfCsv);

    queryObj.data.ddfPath = ddfSettings.url;
    let placeholder = document.getElementById('vizabi-placeholder' + tabId);

    Vizabi(ddfSettings.currentType.value, placeholder, queryObj);
  }
}
