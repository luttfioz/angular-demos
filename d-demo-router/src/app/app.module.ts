import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { DataService } from './core/data.service';
import { FilmComponent } from './film/film.component';

import { AppRoutingModule} from './app.routing.module';
import { CharacterComponent } from './character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
