import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from './service';
import { ServiceService } from './service.service';
 
@Component({
  selector: 'app-detail-service',
  templateUrl: './detail-service.component.html'
})
export class DetailServiceComponent implements OnInit {
goBack() {
throw new Error('Method not implemented.');
}

  serviceList!: Service[];
  service: Service|undefined;

  //On va d’abord importer le router ensuite relier le service
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceService: ServiceService
    ) { }

  ngOnInit() {
    const serviceId: string|null = this.route.snapshot.paramMap.get('id');
    if(serviceId) {
       //On recuperait les donnees d'une maniere synchrone
     // this.service = this.serviceService.getServiceById(+serviceId);

     //Maintenat on va recuperaer  les donnees d'une maniere asynchrone
     this.serviceService.getServiceById(+serviceId)
     .subscribe(service => this.service = service);
    } 
  }

 //Methode AJOUTER un service 
addService(service: Service) {
  this.serviceService.deleteServiceById(service.id!)
  .subscribe(() => this.goToServiceList());

} 
//Methode DELETE service qui va prendre en parametre le service
deleteService(service: Service) {
  this.serviceService.deleteServiceById(service.id!)
  .subscribe(() => this.goToServiceList());
}

//Methode goToServiceList permettant au bouton d'etre fonctionnel
goToServiceList() {
  this.router.navigate(['/services']);
}
 
//Methode pour creer le bouton Edit
goToEditService(service: Service) {
this.router.navigate(['/edit/service', service.id]);
}
}
 

