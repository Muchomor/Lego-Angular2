import { LegoShopService } from './../../shared/legoShop.service';
import { LegoShopSet } from './../../shared/LegoShopSet';
import { Component, OnInit } from '@angular/core';

@Component({
    template: require('./dashboard.component.html!text'),
    selector: 'dashboard'
})
export class DashboardComponent implements OnInit {

    items: LegoShopSet[];

    constructor(private legoShopService: LegoShopService) { }

    ngOnInit() {
        this.legoShopService.getTop3Sets()
            .subscribe((res) => {
                this.items = res;
            });
    }

};
