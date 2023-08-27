//Nos importations
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceModule } from './service/service.module';
import { InMemoryDataService } from './in-memory-data.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent
  ],

  
  imports: [
  BrowserModule,
//On ajoute le FormModule dans ce module racine 
  FormsModule,
/** On relie a la racine le client Htpp pour les requetes 
vers les serveurs distants **/
  HttpClientModule,
/** On relie le module de librairie installee pour simuler notre API
 * dataEncapsulation: false pour que chaque requete ne soit pas forcement
 * stockee dans une data */
HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false}),
//On relie le serviceModule à app.module
  ServiceModule,
//On relie les routes  à app.module
  AppRoutingModule
  ],
    
 providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




