import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuNavigationComponent } from './menu-navigation.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  declarations: [MenuNavigationComponent],
  exports: [ MenuNavigationComponent ]
})
export class MenuNavigationModule { }
