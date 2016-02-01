import {Component, View, EventEmitter, Input, Output} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import {DataService} from './data-service';

let ddfUtils = require('../src-js/vizabi-ddf-utils');

@Component({
  selector: 'header',
  providers: [DataService]
})
@View({
  template: `
  <div class="container-fluid">
    <div class="navbar-header">
      <!--<a class="navbar-brand" href="#">GAPMINDER</a>-->
      <a class="header-title" href="http://www.gapminder.org" style="align: center; margin-right: 25px;">
        GAPMINDER DDF TOOLS
      </a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <form class="navbar-form navbar-left">
        <div class="btn-group" dropdown>
          <button id="type-button" type="button" class="btn btn-default" dropdownToggle>
            {{ddfSettings.currentType.name}} <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" role="menu" aria-labelledby="type-button">
            <li *ngFor="#zCurrentType of ds.types" role="menuitem">
              <a class="dropdown-item" (click)="ddfSettings.currentType = zCurrentType">{{zCurrentType.name}}</a>
            </li>
          </ul>
        </div>

        <div class="form-group">
          <input type="text" [(ngModel)]="ddfSettings.url" class="form-control" placeholder="DDF URL">
        </div>
        <button type="button" (click)="load()" class="btn btn-default">Load</button>
        <button type="button" (click)="newTab()" class="btn btn-default">Tab+</button>
      </form>
    </div>
  </div>
  `,
  directives: [
    DROPDOWN_DIRECTIVES,
    CORE_DIRECTIVES,
    FORM_DIRECTIVES
  ]
})
export class Header {
  @Input()
  worker$;

  private ddfSettings:any = {
    currentType: this.ds.types[0],
    url: this.ds.initDDFURL,
    visible: false
  };
  private ddfQuery:any = {
    measures: [],
    dimensions: [],
    xAxis: '',
    yAxis: '',
    sizeAxis: ''
  };

  constructor(private ds:DataService) {
  }

  private load() {
    if (this.ddfSettings.visible === true) {
      this.ddfSettings.visible = false;
      return;
    }

    ddfUtils.getDimensions(this.ddfSettings.url, (errDim, resultDim) => {
      if (errDim) {
        console.log(errDim);
        return;
      }

      ddfUtils.getMeasures(this.ddfSettings.url, (errMeas, resultMeas) => {
        if (errMeas) {
          console.log(errMeas);
          return;
        }

        this.ddfQuery.dimensions = resultDim;
        this.ddfQuery.measures = resultMeas.filter((v:any) => !!v.measure);

        this.worker$.next({
          action: DataService.SETTINGS_SHOW_ACTION,
          value: {
            ddfQuery: this.ddfQuery,
            ddfSettings: this.ddfSettings
          }
        });
      });
    });
  }

  private newTab() {
    this.worker$.next({
      action: DataService.NEW_TAB_ACTION
    });
  }
}
