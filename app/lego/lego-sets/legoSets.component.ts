import { LegoSet } from '../LegoSet';
import { Component, OnInit } from '@angular/core';


@Component({
    template: require('app/lego/lego-sets/legoSets.component.html!text')
})
export class LegoSetsComponent implements OnInit {

    legoSets: LegoSet[];

    ngOnInit(): void {}

    editSet(id: number): void {}

    deleteSet(id: number) {}

}
