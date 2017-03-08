import { LegoSet } from './LegoSet';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LegoSetService {

    getLegoSets(): Observable<LegoSet[]> {
        throw new Error('not implemented');
    }

    findOne(id: number): Observable<LegoSet> {
        throw new Error('not implemented');
    }

    save(legoSet: LegoSet): Observable<Response> {
        throw new Error('not implemented');
    }

    delete(id: number): Observable<Response> {
        throw new Error('not implemented');
    }
}
