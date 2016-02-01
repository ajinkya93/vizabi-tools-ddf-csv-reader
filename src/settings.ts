import {Component, View, EventEmitter, Output, Input, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import {DataService} from './data-service';

@Component({
  selector: 'settings'
})
@View({
  template: `
  <div *ngIf="visible" class="container-fluid">

    <div *ngIf="ddfQuery.measures.length > 1" class="collapse navbar-collapse">

      <div *ngIf="ddfSettings.currentType.value === 'BubbleChart' || ddfSettings.currentType.value === 'MountainChart'">
        <div class="btn-group" dropdown>
          <button id="x-axis-button" type="button" class="btn btn-default" dropdownToggle>
            {{ddfQuery?.xAxis?.name || 'X measure'}} <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" role="menu" aria-labelledby="x-axis-button">
            <li *ngFor="#axis of ddfQuery.measures" role="menuitem">
              <a class="dropdown-item" (click)="ddfQuery.xAxis = axis">{{axis.name}}</a>
            </li>
          </ul>
        </div>

        <div class="btn-group" dropdown>
          <button id="y-axis-button" type="button" class="btn btn-default" dropdownToggle>
            {{ddfQuery?.yAxis?.name || 'Y measure'}} <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" role="menu" aria-labelledby="y-axis-button">
            <li *ngFor="#axis of ddfQuery.measures" role="menuitem">
              <a class="dropdown-item" (click)="ddfQuery.yAxis = axis">{{axis.name}}</a>
            </li>
          </ul>
        </div>

        <div class="btn-group" dropdown>
          <button id="s-axis-button" type="button" class="btn btn-default" dropdownToggle>
            {{ddfQuery?.sizeAxis?.name || 'Size measure'}} <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" role="menu" aria-labelledby="s-axis-button">
            <li *ngFor="#axis of ddfQuery.measures" role="menuitem">
              <a class="dropdown-item" (click)="ddfQuery.sizeAxis = axis">{{axis.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div *ngIf="ddfSettings.currentType.value === 'BubbleMap'">
        <div class="btn-group" dropdown>
          <button id="s-axis-button" type="button" class="btn btn-default" dropdownToggle>
            {{ddfQuery?.sizeAxis?.name || 'Size measure'}} <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" role="menu" aria-labelledby="s-axis-button">
            <li *ngFor="#axis of ddfQuery.measures" role="menuitem">
              <a class="dropdown-item" (click)="ddfQuery.sizeAxis = axis">{{axis.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div style="margin-top: 10px; padding-bottom: 5px;">
        <input type="button"
               [disabled]="((ddfSettings.currentType.value === 'BubbleChart' || ddfSettings.currentType.value === 'MountainChart') && (!ddfQuery.xAxis || !ddfQuery.yAxis || !ddfQuery.sizeAxis)) || (ddfSettings.currentType.value === 'BubbleMap' && !ddfQuery.sizeAxis)"
               class="btn btn-default"
               (click)="chart()"
               value="Go" />
        <input type="button" (click)="visible = false" class="btn btn-default" value="Close" />
      </div>

    </div>
  </div>
  `,
  directives: [
    DROPDOWN_DIRECTIVES,
    CORE_DIRECTIVES,
    FORM_DIRECTIVES,
  ]
})
export class Settings implements OnInit {
  @Input()
  worker$;

  private visible:boolean = false;
  private ddfSettings;
  private ddfQuery;

  ngOnInit() {
    this.worker$
      .filter((v:any) => v.action === DataService.SETTINGS_SHOW_ACTION &&
      (v.value instanceof Object && v.value.ddfSettings && v.value.ddfQuery))
      .subscribe((v) => {
        this.ddfSettings = v.value.ddfSettings;
        this.ddfQuery = v.value.ddfQuery;
        this.visible = true;
      });
  }

  private chart() {
    this.visible = false;
    this.worker$.next({
      action: DataService.DO_CHART_ACTION,
      value: {
        ddfSettings: this.ddfSettings,
        ddfQuery: this.ddfQuery
      }
    });
  }
}
