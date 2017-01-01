import { Component, OnInit } from '@angular/core';

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

  ngOnInit(){
    this.characters = [
      { name: 'Kylo Ren', theme: 'red' },
      { name: 'Darth Vader', theme: 'black' },
      { name: 'Rey', theme: 'gray' },
      { name: 'Luke Skywalker', theme: 'blue' }
    ];

    this.filmTitle = "Star Wars";
    this.selectedCharacter = this.characters[0];

  }
}
