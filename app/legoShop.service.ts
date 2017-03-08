import { data } from './data';
import { LegoShopSet } from './LegoShopSet';
import { Injectable } from '@angular/core';

@Injectable()
export class LegoShopService {

    private legoSets: LegoShopSet[] = data;

    getLegoSets(query?: string): LegoShopSet[] {
        return this.legoSets.filter(val => {
            if (!query) {
                return true;
            }
            return val && val.descr && val.descr.toUpperCase().indexOf(query.toUpperCase()) !== -1;
        });
    }

    getTop3Sets(): LegoShopSet[] {
        return this.legoSets.slice(0, 3);
    }

    findOne(id: string): LegoShopSet {
        return this.legoSets.filter(val => val && val.set_id && val.set_id === id)[0];
    }
}
