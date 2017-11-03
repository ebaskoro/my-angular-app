import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from '../environments/environment';
import { Hero } from './hero';


/**
 * Hero service.
 *
 */
@Injectable()
export class HeroService {

    private readonly url = `${environment.baseApiUrl}/heroes`;
    private readonly headers = new Headers({
        'Content-Type': 'application/json'
    });


    constructor(private readonly http: Http) {
    }


    getHeroes(): Promise<Hero[]> {
        return this.http
            .get(this.url)
            .toPromise()
            .then(value => value.json() as Hero[])
            .catch(this.handleError);
    }


    getHero(id: number): Promise<Hero> {
        return this.http
            .get(`${this.url}/${id}`)
            .toPromise()
            .then(value => value.json() as Hero)
            .catch(this.handleError);
    }


    create(name: string): Promise<Hero> {
        const body = JSON.stringify({
            name: name
        });
        const options = {
            headers: this.headers
        };
        return this.http
            .post(this.url, body, options)
            .toPromise()
            .then(value => value.json() as Hero)
            .catch(this.handleError);
    }


    update(hero: Hero): Promise<Hero> {
        const body = JSON.stringify(hero);
        const options = {
            headers: this.headers
        };
        return this.http
            .put(`${this.url}/${hero.id}`, body, options)
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }


    delete(id: number): Promise<void> {
        const options = {
            headers: this.headers
        };
        return this.http
            .delete(`${this.url}/${id}`, options)
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }


    private handleError(reason: any): Promise<any> {
        console.error('An error occurred', reason);
        return Promise.reject(reason.message || reason);
    }

}
