import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

//service d'authenfication injecte a la racine root
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
//variable si l'user est connecte ou non, par defaut false
//isLoggedIn: boolean = false; // L'utilisateur est-il connecté ?
private loggedIn = new BehaviorSubject<boolean>(false);
  router: any;
  auth: any;

 get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

redirectUrl!: string; // où rediriger l'utilisateur après l'authentification ?
  get: any;
  
/** On aura besoin de 2 methodes, une pour connecter l'user
 * l'autre pour deconnecter l'user */

//Methode de connexion
  login(name: string, password: string): Observable<boolean> {
    //Dire que l'user est connecte, si son name et password  egale pikachu dans ce projet
    // Faites votre appel à un service d'authentification...
    let isLoggedIn = (name === 'pikachu' && password === 'pikachu');
    //On peut donc retourner le resultat de cette operation en simulant un delai 1 seconde
    
    return of(true).pipe(
      delay(1000),
      tap(val => isLoggedIn = isLoggedIn)
      );
   } 
    // Une méthode de déconnexion
    logout(): void {
    this['AuthService'].isLoggedIn = false;
  }
}

