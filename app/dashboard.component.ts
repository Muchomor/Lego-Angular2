import { LegoShopSet } from './LegoShopSet';
import { data } from './data';
import { Component } from '@angular/core';

@Component({
    template: require('./dashboard.component.html!text'),
    selector: 'dashboard'
})
// TODO: import OnInit from @angular/core and make the DashboardComponent implement it
export class DashboardComponent {

    // TODO: use constructor in order to inject LegoShopService
    items: LegoShopSet[] = data;

    // TODO: implement ngOnInit method and call LegoShopService.getTop3Sets() method, assign result to items property
};
