import {bootstrap}    from 'angular2/platform/browser';
import {Component, View} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {TAB_DIRECTIVES, DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {Subject} from 'rxjs/Rx';

import {DataService} from './data-service';
import {Header} from './header';
import {Settings} from './settings';
import {Container} from './container';

@Component({
  selector: 'app',
  providers: [DataService]
})
@View({
  template: `
<nav class="navbar">
  <header [worker$]="worker$"></header>
  <settings [worker$]="worker$"></settings>
</nav>
<container [worker$]="worker$"></container>
  `,
  directives: [
    TAB_DIRECTIVES,
    DROPDOWN_DIRECTIVES,
    CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    Header, Settings, Container
  ]
})
export class Home {
  private worker$:Subject<any> = new Subject();
  private currentTab:any;

  constructor(private ds:DataService) {
    this.worker$
      .filter(v => v.action === DataService.CURRENT_TAB_ACTION && v.value instanceof Object)
      .subscribe(v => {
        this.currentTab = v.value;
      });

    this.worker$
      .filter(v => v.action === DataService.DO_CHART_ACTION &&
      (v.value instanceof Object && v.value.ddfSettings && v.value.ddfQuery))
      .subscribe(v => {
        this.ds.addChart(v.value.ddfSettings, v.value.ddfQuery, this.currentTab.id);
      });
  }
}

bootstrap(Home, [DataService]);
