import { Component, OnInit } from '@angular/core';
import { Horror } from './horror';
import { HORRORS } from './mock-horror';
import { Router } from '@angular/router';
  
@Component({
    selector: 'list-horror',
    templateUrl: './app/list-horror.component.html'
})
export class ListHorrorComponent implements OnInit {
  
    horrors: Horror[] = null;
  
    constructor(private router: Router) { }
  
    ngOnInit(): void {
        this.horrors = HORRORS;
    }
  
    selectHorror(horror: Horror): void {
        console.log('Vous avez selectionné ' + horror.name);
        let link = ['/horror', horror.id];
        this.router.navigate(link);
    }
  
}