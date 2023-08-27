//Nos importations
import { Injectable } from '@angular/core';

/** On va ajoutee une interface InMemoryDbService qui va 
 *  me demander d'implementer une methode pour simuler
 ma base de donnee */
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { SERVICES } from './service/serviceType';

@Injectable({
  providedIn: 'root'
})
//On implemente cette interface InMemoryDbService dans ce service 
export class InMemoryDataService implements InMemoryDbService {

/** On cree la base de donnee, qui va simuler une API REST
 * Avec des operations CRUD (Creeat, Read, Update, Delete)
 * pour tous les services wepapp, website, ... */
createDb() {
  /** On va  retourner notre constante de SERVICES
   * qu'on va mettre dans un objet { } */
  const services = SERVICES;
  return { services };
}
}

/** On aura donc des points de terminaisons pour effecteur 
 * dees requetes, par exemple get API/service ou put API/1
 * ou effectuer des recherches de services comme tous les services
 * dont le nom commence par w, ... */


