import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Horror } from './horror';
import { HORRORS } from './mock-horror';
  
@Component({
    selector: 'detail-horror',
    templateUrl: './app/detail-horror.component.html'
})
export class DetailPokemonComponent implements OnInit {
  
    horrors: Horror[] = null;
    horror: Horror = null;
  
    constructor(private route: ActivatedRoute, private router: Router) {}
  
    ngOnInit(): void {
        this.horrors = HORRORS;
  
        let id = +this.route.snapshot.paramMap.get('id');
        for (let i = 0; i < this.horrors.length; i++) {
            if (this.horrors[i].id == id) {
                this.horror = this.horrors[i];
            }
        }
    }
  
    goBack(): void {
        this.router.navigate(['/horrors']);
    }
  
}