import { Component, OnInit} from '@angular/core';
import { Service } from './service';
import { Router } from '@angular/router';
import { ServiceService } from './service.service';
  
@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html'
})
export class ListServiceComponent implements OnInit{
  
  serviceList: Service[] = [];

  //on va utiliser notre servicenew ici
  constructor(
    private router: Router,
    private serviceService: ServiceService
    ) {}

    ngOnInit() {
      //Ici on recupeere la liste de seervicce dee mannieree synchrone
      //this.serviceList = this.serviceService.getServiceList();

      /** On va recuperer la liste des services cette fois-ci de maniere asynchone
       * via subsccribe qui permet dee nous abonner au service precedant et recevoir
       * la liste de service, une fois recu l'attribuer a la propriete serviceList 
       * C'est le principe de base pour acceder a nos donnees dans le serveur */
      this.serviceService.getServiceList()
      .subscribe(serviceList => this.serviceList = serviceList);
    }

  goToService(service: Service) {
    this.router.navigate(['/service', service.id]);
  }
}
