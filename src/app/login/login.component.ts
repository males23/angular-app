import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {

  message: string = 'Vous êtes déconnecté. (pikachu/pikachu)';
  name!: string;
  password!: string;
  auth!: AuthService;
  isLoggedIn: boolean = false;
  
  constructor(private authService: AuthService, private router: Router) { }

  //Informe l'utilisateur sur son authentfication.
  setMessage() {
    this.message = this.authService.isLoggedIn ?
    'Vous êtes connecté 😀.' : 'Identifiant ou mot de passe incorrect 😩.';
  }

  // Connecte l'utilisateur auprès du Guard
  login() {
    this.message = 'Tentative de connexion en cours...';
    this.authService.login(this.name, this.password).subscribe(() => {
      this.setMessage();

      if (this.authService.isLoggedIn) {
        // Récupère l'URL de redirection depuis le service d'authentification
        // Si aucune redirection n'a été définis, redirige l'utilisateur vers la liste des services.
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl:'/services';
        // Redirige l'utilisateur
        this.router.navigate([redirect]);
    } else {
        this.password = '';
    }
});
}

// Déconnecte l'utilisateur
logout() {
this.authService.logout();
this.setMessage();
}
}


