import { Component, OnInit } from '@angular/core';

import { DataService } from './../core/data.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  films : any[];
  selectedFilm : any;
  
  constructor(private dataService : DataService){}

  ngOnInit(){
  
    this.dataService.getFilms()
        .subscribe(films => this.films = films)

  }

}
