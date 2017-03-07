import { LegoShopSet } from './LegoShopSet';
import { data } from './data';
import { Component } from '@angular/core';

@Component({
    template: require('./dashboard.component.html!text'),
    selector: 'dashboard'
})
export class DashboardComponent {

    // TODO: use constructor in order to inject LegoShopService and call getTop3Sets() method, assign result to items property
    items: LegoShopSet[] = data;
};
