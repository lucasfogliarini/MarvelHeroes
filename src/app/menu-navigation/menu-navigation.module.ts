import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuNavigationComponent } from './menu-navigation.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  declarations: [MenuNavigationComponent],
  exports: [ MenuNavigationComponent ]
})
export class MenuNavigationModule { }
