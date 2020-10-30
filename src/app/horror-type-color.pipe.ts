import { Pipe, PipeTransform } from '@angular/core';
import { from } from 'rxjs';
import{Horror} from './horror';

@Pipe({name: 'horrorTypeColor'})
export class HorrorTypeColorPipe implements PipeTransform {
  transform(type: string): string {
  
    let color: string;
  
    switch (type) {
      case 'Horreur':
        color = 'red lighten-1';
        break;
      case 'Slasher':
        color = 'blue lighten-1';
        break;
      case 'Thriller':
        color = 'green lighten-1';
        break;
      case 'Gore':
        color = 'brown lighten-1';
        break;
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color;
  
  }
}