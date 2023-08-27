//Les importations
import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Service } from '../service';
import { Router } from '@angular/router';
 
//On peut passer un seul template mais plusieurs feuille css
@Component({
/** le selector app-service-form qui va etre relie a une
route et place dans un composant parent */
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})

export class ServiceFormComponent implements OnInit {
//Si probleme c'est ici !
  @Input() service: Service = new Service;
  types: string[] = [];
  isAddForm: Boolean | undefined; 

  constructor(
    private serviceService: ServiceService,
/**Injecter le routeur pour rediriger l'user sur la page precedante
en important le Router d'Angular **/
    private router: Router
  ) { }
  
    ngOnInit() {
//Recuperation de toute la liste de service
      this.types = this.serviceService.getServiceTypeList();
//la route pour ajouter un service doit contenir le mot add sinon 
      this.isAddForm = this.router.url.includes('add'); 
    }
//Savoir si le service possede le type pour renvoyer true ou false
hasType(type: string): boolean {
  return this.service.types.includes(type);
}

//Nous dit quand l'user coche le type ou pas
selectType($event: Event, type: string) {
  const isChecked: Boolean = ($event.target as HTMLInputElement).checked;
//Ajouter le type coche sinon l'enlever
  if(isChecked) {
    this.service.types.push(type);
  } else {
//on recupere l'index du type que l'user veut recuperer
    const index = this.service.types.indexOf(type);
    //On modifie le tableau types, enlever 1 element
    this.service.types.splice(index, 1);
  }
}
/** Les regles de validation des types
 * 3 types au max */
isTypesValid(type: string): boolean {
/** Deux cas d'erreur : 1er si le type < 1 et le 2iem si type > 2
* donc si deja 3 types cocches on bloque les autres */
  if(this.service.types.length == 1 && this.hasType(type)) {
    return false;
  }
  if(this.service.types.length > 2 && !this.hasType(type)) {
    return false;
  }

  return true;
}

/** Avec les donnees synchrones on affichait un message dans la console en disant que le 
formulaire a ete soumis */
//onSubmit() {
  //console.log('Submit form !');
/** On  redirigeait l'user sur la page du service qu'il vient d'editer
* afin de voir ses modifications, pour ça on avait  besoin du routeur 
* Ce routeur qui a ete injecte dans le constructeur la haut */
  //this.router.navigate(['/service', this.service.id]);
//}

/** Maintenant avec les donnees asynnchrone, comment sauvegarder les modifications
 * dans le serveur, si add est dans l'url c'est ajouteer sinon c'eest editer */
onSubmit() {
  if(this.isAddForm) {
    this.serviceService.addService(this.service)
    .subscribe((service: Service) => this.router.navigate(['/service', service.id]));

  } else {
    this.serviceService.updateService(this.service)
    .subscribe(() => this.router.navigate(['/service', this.service.id]));
  }
} 
}
