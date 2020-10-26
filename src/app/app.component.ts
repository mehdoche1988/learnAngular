import { Component } from '@angular/core';
  
@Component({
  selector: 'Horror-app',
  template: `<h1>Welcome to my world {{name}}</h1>`,
})
export class AppComponent  { name = 'Bitch'; }