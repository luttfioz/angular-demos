import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    getCharacters() {
        return[
                { name: 'Kylo Ren', theme: 'red' },
                { name: 'Darth Vader', theme: 'black' },
                { name: 'Rey', theme: 'gray' },
                { name: 'Luke Skywalker', theme: 'blue' }
              ];
    }


}