import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../environments/environment';
import { Hero } from './hero';


/**
 * Hero search service.
 *
 */
@Injectable()
export class HeroSearchService {

    private readonly url = `${environment.baseApiUrl}/heroes`;


    constructor(private readonly http: Http) {
    }


    search(term: string): Observable<Hero[]> {
        const url = `${this.url}?name=${term}`;
        return this.http
            .get(url)
            .map(response => response.json() as Hero[]);
    }

}
