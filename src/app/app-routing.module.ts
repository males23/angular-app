import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

/**constante qui permet de creer des routes
 * on creer 3 routes : liste service, 
 * taille service et route vide, chemin par defaut
 * */
const routes: Routes = [
  //On garde que quelques routes dans la racine
  //Au demarrage dee l'app, rediriger vers la page de connexion login
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //On va declarer ce chemin login
  { path: 'login', component: LoginComponent },
  //intercepte toutes les routes à mettre en dernier
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


