//auth.guard.ts
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { ɵɵinject } from '@angular/core';

 // Définir la fonction authGuard, qui implémente l'interface CanActivateFn
export const AuthGuard: CanActivateFn = (route, state) => {

  // Utilisez l'injection de dépendances pour obtenir une instance d'AuthService
  const authService =  ɵɵinject(AuthService);

  // Vérifiez si l'utilisateur est connecté à l'aide d'AuthService
   if (authService.isLoggedIn) {
    return true; // Si vous êtes connecté, autorisez l'accès à la route
  } else {
    return false; //Si vous n'êtes pas connecté, refusez l'accès à la route
  }
};


