import { LegoShopSet } from './LegoShopSet';
import { data } from './data';
import { Component } from '@angular/core';

@Component({
    template: require('./dashboard.component.html!text'),
    selector: 'dashboard'
})
export class DashboardComponent {
    items: LegoShopSet[] = data;
};
