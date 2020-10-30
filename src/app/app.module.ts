import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';
import { HorrorTypeColorPipe } from './horror-type-color.pipe';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, BorderCardDirective, HorrorTypeColorPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }