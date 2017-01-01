import { Component, OnInit } from '@angular/core';
import { DataService } from './../core/data.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  characters : any[];
  selectedCharacter : any;

  constructor(private dataService : DataService){}

  ngOnInit(){
  
  //this.characters = this.dataService.getCharacters();


    this.dataService.getCharactersHttp()
        .subscribe(characters => this.characters = characters)

    //this.selectedCharacter = this.characters[0];

  }

}
