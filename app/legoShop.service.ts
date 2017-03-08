import { data } from './data';
import { LegoShopSet } from './LegoShopSet';
import { Injectable } from '@angular/core';

@Injectable()
export class LegoShopService {

    private legoSets: LegoShopSet[] = data;

    // TODO: modify this method by adding optional query string parameter and filter the results
    // Hint: getLegoSets(query?: string): LegoShopSet[]
    getLegoSets(): LegoShopSet[] {
        return this.legoSets;
    }

    getTop3Sets(): LegoShopSet[] {
        return this.legoSets.splice(0, 3);
    }

    findOne(id: string): LegoShopSet {
        // TODO: implement method
        throw (new Error('not implemented yet'));
    };
}
