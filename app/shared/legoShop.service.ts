import { data } from './data';
import { LegoShopSet } from './LegoShopSet';
import { Injectable } from '@angular/core';


// TODO: convert all methods to use API exposed by json-server. Endpoint: '/services/lego-shop-sets/'
// TODO: API will return a list of LEGo sets, use it to implement getLegoSets, add private filterByQuery method to filter the results.  
// TODO: when implementing findOne method, use existing getLegoSets and add private filterById  method to find the required result.
// TODO: when implementing getTop3Sets, use getLegoSets methid and 'Fire' as query value, 
// TODO: add error handling in form of a simple function acting as logging proxy

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
