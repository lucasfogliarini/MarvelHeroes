import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuNavigationModule } from './menu-navigation/menu-navigation.module';
import { CharactersComponent } from './characters/characters.component';
import { MarvelService } from './marvel.service';
import { StoriesComponent } from './stories/stories.component';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MenuNavigationModule,
    RouterModule.forRoot([
      { path: 'stories', component: StoriesComponent },
      { path: 'characters', component: CharactersComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
  ],
  providers: [ MarvelService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
