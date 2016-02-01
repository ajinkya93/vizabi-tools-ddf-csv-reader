import {Component, View, EventEmitter, Input, Output, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import {DataService} from './data-service';

@Component({
  selector: 'container'
})
@View({
  template: `
<hr class="under-header">
<tabset *ngIf="tabs.length > 0">
  <tab *ngFor="#tabz of tabs"
       [heading]="tabz.title"
       [active]="tabz.active === true"
       (select)="activate(tabz)">
    <div class="column main" style="height: 70vh;"
         id="vizabi-placeholder{{tabz.id}}">
    </div>
  </tab>
</tabset>
  `,
  directives: [
    TAB_DIRECTIVES,
    CORE_DIRECTIVES,
    FORM_DIRECTIVES
  ]
})
export class Container implements OnInit {
  @Input()
  worker$;
  private tabs:Array<any> = [];
  private currentTab:any;

  ngOnInit() {
    this.worker$
      .filter((v:any) => v.action === DataService.NEW_TAB_ACTION)
      .subscribe(() => {
        this.newTab();
      });
    this.worker$.next({
      action: DataService.NEW_TAB_ACTION
    });
  }

  private newTab() {
    let n = this.tabs.length;
    let tab = {id: n, title: 'Chart ' + (n + 1)};
    this.tabs.push(tab);
    this.activate(tab);
  }

  private activate(tab:any) {
    this.currentTab = tab;
    this.tabs.map((v:any) => {
      v.active = v === this.currentTab;
    });
    this.worker$.next({
      action: DataService.CURRENT_TAB_ACTION,
      value: this.currentTab
    });
  }
}
