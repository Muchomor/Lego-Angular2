import { LegoShopSet } from './../../shared/LegoShopSet';
import { LegoSet, Status } from './../LegoSet';
import { LegoSetService } from './../legoSet.service';
import { LegoShopService } from './../../shared/legoShop.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// TODO: Extend legoShopService to use Http and align showLegoSetDetailsByLegoShopSetId method 
// TODO: Implement showLegoSetDetailsById method, use legoSetService to find specific set by id
// TODO: implement save method, re-implement legoSetService save method to use API exposed by json-server

@Component({
    template: require('app/lego/lego-set-details/legoSetDetails.component.html!text')
})
export class LegoSetDetailsComponent implements OnInit {

    currentLegoSet: LegoSet = new LegoSet();
    statuses: string[] = [Status[Status.New], Status[Status.Used]];

    constructor(
        private legoSetService: LegoSetService,
        private legoShopService: LegoShopService,
        private route: ActivatedRoute,
        private router: Router
    ) { }


    ngOnInit() {
        this.route.params.subscribe(val => {
            let legoSetId: number = +this.route.snapshot.params['legoSetId'];
            let legoShopSetId: string = this.route.snapshot.params['legoShopSetId'];

            if (legoShopSetId) {
                this.showLegoSetDetailsByLegoShopSetId(legoShopSetId);
            }

            if (legoSetId !== undefined && !isNaN(legoSetId)) {
                this.showLegoSetDetailsById(legoSetId);
            }
        });

    }

    showLegoSetDetailsByLegoShopSetId(legoShopSetId: string) {
        let legoShopSet: LegoShopSet = this.legoShopService.findOne(legoShopSetId);

        this.currentLegoSet = <LegoSet>{
            externalId: legoShopSet.set_id,
            name: legoShopSet.descr,
            imagePath: legoShopSet.img_tn,
            status: Status[Status.New]
        };
    }

    showLegoSetDetailsById(legoSetId: number) {}

    onStatusChange(newValue: string): void {
        this.currentLegoSet.status = newValue;
    }

    save(): void {
        this.legoSetService.save(this.currentLegoSet);
    }

}
