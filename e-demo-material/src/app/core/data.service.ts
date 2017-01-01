import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DataService {

    url: string = 'http://swapi.co/api/';
  
    constructor(private http: Http) { }

    getCharacters() {
        return[
                { name: 'Kylo Ren', theme: 'red' },
                { name: 'Darth Vader', theme: 'black' },
                { name: 'Rey', theme: 'gray' },
                { name: 'Luke Skywalker', theme: 'blue' }
              ];
    }

    getCharactersHttp() : Observable<any[]> {
        return this.http.get(this.url + 'people/')
        .map(this.extractData);
    }

    getFilms() : Observable<any[]> {
        return this.http.get(this.url + 'films/')
        .map(this.extractData);
    }

    private extractData(res: Response) {
        let data = res.json().results;
        return data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }


}