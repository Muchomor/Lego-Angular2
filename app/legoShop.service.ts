import { data } from './data';
import { LegoShopSet } from './LegoShopSet';
import { Injectable } from '@angular/core';

@Injectable()
export class LegoShopService {

    private legoSets: LegoShopSet[] = data;

    getLegoSets(): LegoShopSet[] {
        return this.legoSets;
    }

    getTop3Sets(): LegoShopSet[] {
        return this.legoSets.splice(0, 3);
    }
}
