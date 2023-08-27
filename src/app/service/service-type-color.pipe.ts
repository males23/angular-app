import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serviceTypeColor'
})
export class ServiceTypeColorPipe implements PipeTransform {

//C'est la methode transform qui compte
  transform(type: string): string {
    let color: string;

    switch (type) {
      case 'Application Web':
        color = 'red lighten-1';
        break;
      case 'Web':
        color = 'blue lighten-1';
        break;
      case 'Site Web':
        color = 'green lighten-1';
        break;
      case 'Cartes Visite':
        color = 'brown lighten-1';
        break;
      case 'Flyers':
        color = 'grey lighten-9';
        break;
      case 'Vectoriel':
        color = 'blue lighten-3';
        break;
      case 'Qualité':
        color = 'yellow lighten-3';
        break;
      case 'Présentation':
        color = 'orange lighten-3';
        break;
      default:
      case 'Web':
        color = 'deep-purple accent-1';
        break;
    }
  
    return 'chip ' + color;
  }

}
