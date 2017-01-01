import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { CharacterComponent } from './character/character.component';


const routes: Routes = [
  { path: 'films', component: FilmComponent },
  { path: 'characters', component: CharacterComponent },
  //{ path: '**', pathMatch:'full', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
