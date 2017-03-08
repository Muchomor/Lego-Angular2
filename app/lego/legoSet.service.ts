import { LegoSet } from './LegoSet';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
@Injectable()
export class LegoSetService {

    getLegoSets(): Observable<LegoSet[]> {
        throw new Error('not implemented');
    }

    findOne(id: number): Observable<LegoSet> {
        throw new Error('not implemented');
    }

    private add(legoSet: LegoSet): Observable<Response> {
        console.log('set added');
        console.dir(legoSet);
        return Observable.of();
    }

    private edit(legoSet: LegoSet): Observable<Response> {
        console.log('set edited');
        return Observable.of();
    }

    save(legoSet: LegoSet): Observable<Response> {
        if (legoSet.id) {
            return this.edit(legoSet);
        }
        return this.add(legoSet);
    }

    delete(id: number): Observable<Response> {
        throw new Error('not implemented');
    }
}
