import { Component, OnInit } from '@angular/core';

import { LegoSet } from '../LegoSet';
import { LegoSetService } from '../legoSet.service';

// TODO: Add buttons to edit and delete content (per table/list row or underneath/floating on page top/bottom)
// TODO: Navigate to LEGO set details view when edit button clicked/tapped
// TODO: delete selected set via legoSetService and refresh legoSets when delete completed

@Component({
    template: require('app/lego/lego-sets/legoSets.component.html!text')
})
export class LegoSetsComponent implements OnInit {

    legoSets: LegoSet[];

    constructor(private legoSetService: LegoSetService) {}

    ngOnInit(): void {
        this.legoSetService.getLegoSets().subscribe((res) => {
            this.legoSets = res;
        });
    }

    editSet(id: number): void {}

    deleteSet(id: number) {}

}
