import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuNavigationModule } from './menu-navigation/menu-navigation.module';
import { CharactersComponent } from './characters/characters.component';
import { MarvelService } from './marvel.service';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MenuNavigationModule,
    RouterModule.forRoot([
      { path: 'characters', component: CharactersComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
  ],
  providers: [ MarvelService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
