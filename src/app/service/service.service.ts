//Nos importations
//On precise HttpClient ici et non HttpClientModule
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Observable, catchError, of, tap } from 'rxjs';
import { Service } from './service';
 
//Le decorateur Injectable et non Service
@Injectable()
export class ServiceService {
//On injecte le client http dans notre service 
constructor(private http: HttpClient) {}

  /** On avait creer 3 methodes recuperant la liste des services
   * l'id et le type du service retournant directement
   * une constante en dur SERVICES */ 
  // getServiceList(): Service[] {
    // return SERVICES;
  // }

   /**  Cette fois-ci on passe par le serveur distant donc l'API REST 
    * On va recevoir une donnee qui elle contient un tableau de service 
    * On ne va directemennt retourner les services car on ne les a pas
    * a l'instant t, donc on utilise le flux observable qui recevra de 
    * la donne dans le temps */
   getServiceList(): Observable<Service[]> {
    /** On retourne un flux qui contient les services en lui passant
     * une URL api/services qui emmene vers l'API */
    return this.http.get<Service[]>('api/services').pipe(
/** definir deux choses en plus du traitement de la requete
* loguer ou afficher la reponse 
* et intercepter les erreurs eventuelles */
     // tap((response) => console.table(response)), tap est comme log
     tap((response) => this.log(response)),
     //intercepter les erreurs eventuelle
     catchError((error) => this.handleError(error, []))
    );
  }
//On recuperait un service à partir de son identifiant 
  // getServiceById(serviceId: number): Service|undefined {
   // return SERVICES.find(service => service.id == serviceId);
  //}
// Maintenant un service à partir de son identifiant via requete http
  getServiceById(serviceId: number): Observable<Service|undefined> {
    //return this.http.get<Service>('api/service/:id')
    return this.http.get<Service>(`api/services/${serviceId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
      );
    }

/** Je veux tous les services qui corresponndent a un terme de recherche
 * Pour chaque terme de recherche, on retourne la reponse du serveur */
  searchServiceList(term: string): Observable<Service[]> {
    //Si la recherche est inferieure  a deux lettres, elle ne donne rien
    if(term.length <= 1) {
      return of([]);
    }
    return this.http.get<Service[]>(`api/services/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, [])) //au niveau dee l'error tableeau vide
    );
  }


  /** Nous creons une méthode de sauvegarde de modification de données asynchrone 
   *  lors  de l'édition d'un service */
  updateService(service: Service): Observable<null> {
    //Il faut preciser au client d'Angular, on envoiee des donneees dans des requetes
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    //requete de modification avec le client http d'Angular pour persister les modification avec put
    return this.http.put('api/services', service, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

/** Methode d'ajout d'un service et persister la suppression dans le serveur
 * Avec post */
  addService(service: Service): Observable<Service> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Service>('api/services', service, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
    }
     
  /** Methode de suppression d'un service et persister la suppression dans le serveur
   * Avec delete */
  deleteServiceById(serviceId: number): Observable<null> {
    return this.http.delete(`api/services/${serviceId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
      );
    }

    /** Dans le soucis de factoriser le code, on a creer deux
     * methodes privee, non accissibles en dehors du service */
    private log(response: any) {
      console.table(response);
    }
    private handleError(error: Error, errorValue: any) { 
      console.error(error);
      return of(errorValue); //le of permettant de transformer la donnee en flux
    }

  getServiceTypeList(): string[] {
    return [
      'Application Web', 'Responsive', 'Securisée',
      'Site Web', 'Vitrine', 'e-commerce',
      'Cartes Visite', 'Invitation', 'Menu',
      'Flyers', 'Posters', 'Faire-part',
      'Vectoriel', 'Unique', 'Diversifié',
      'Présentation', 'Montage', 'Haute-qualité'
    ];
  }
}

