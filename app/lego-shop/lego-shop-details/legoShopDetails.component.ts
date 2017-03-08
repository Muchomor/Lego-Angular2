import { Component, OnInit } from '@angular/core';
import { LegoShopSet } from './../../shared/LegoShopSet';
import { ActivatedRoute, Router } from '@angular/router';
import { LegoShopService } from './../../shared/legoShop.service';

@Component({
    template: require('./legoShopDetails.component.html!text')
})
export class LegoShopDetailsComponent implements OnInit {

    currentLegoShopSet: LegoShopSet = new LegoShopSet();

    constructor(private legoShopService: LegoShopService,
        private route: ActivatedRoute,
        private router: Router) { }


    ngOnInit() {
        this.route.params.subscribe(val => {
            let id: string = this.route.snapshot.params['legoShopSetId'];
            this.findLegoShopSetById(id);
        });
    }


    findLegoShopSetById(id: string): void {
        if (id) {
            this.currentLegoShopSet = this.legoShopService.findOne(id);
        } else {
            console.error('lego set not found');
            this.router.navigate(['dashboard']);
        }
    }

    convertToLegoSet(): void {
        this.router.navigate(['lego-set-details', { legoShopSetId: this.currentLegoShopSet.set_id }]);
    }
}
