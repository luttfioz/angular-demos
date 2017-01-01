import { Component, OnInit } from '@angular/core';

import { DataService } from './core/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'app works!';

  filmTitle : string;
  characters : any[];
  selectedCharacter : any;

  constructor(private dataService : DataService){}

  ngOnInit(){
    this.characters = this.dataService.getCharacters();

    this.filmTitle = "Star Wars";
    this.selectedCharacter = this.characters[0];

  }
}
