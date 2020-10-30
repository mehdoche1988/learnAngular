import { Component, OnInit } from '@angular/core';

import { Horror } from './horror';
import { HORRORS } from './mock-horror';

@Component({
  selector: 'Horror-app',
  templateUrl: `./app/app.component.html`,
})
export class AppComponent implements OnInit {

  private horrors: Horror[];
  private title: string = "Tueurs de film d'horreur";

  ngOnInit() {
    this.horrors = HORRORS;
  }


  selectHorror(horror: Horror) {
    alert("Vous avez cliquez sur " + horror.name)
  }
}