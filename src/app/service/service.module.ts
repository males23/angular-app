import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ListServiceComponent } from './list-service.component';
import { DetailServiceComponent } from './detail-service.component';
import { BorderCardDirective } from './border-card.directive';
import { ServiceTypeColorPipe } from './service-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ServiceService } from './service.service';
import { FormsModule } from '@angular/forms';
import { ServiceFormComponent } from './service-form/service-form.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { SearchServiceComponent } from './search-service/search-service.component';
import { LoaderComponent } from './loader/loader.component';
//On importe notre Guard ici
import { AuthGuard } from '../auth.guard';


/** ComonModule est une base qui comprend
 * les directives ngFor et ngIf... */

//Declaration des Routes qui sont des objets
const serviceRoutes: Routes = [
/** Pour que le formulaire apparaisse en cliquant sur Edit
* On ajoute la route edit */
/** On va appliquer le Guard a la route d'edition concernee 
 * en ajoutant le type de Guard donc canActivate
*/
{ path: 'edit/service/:id', 
component: EditServiceComponent, canActivate: [AuthGuard]},
//On peut mettre le Guard sur le reste des routes
{ path: 'service/add', component: AddServiceComponent, canActivate: [AuthGuard] },
{ path: 'services', component: ListServiceComponent, canActivate: [AuthGuard] },
{ path: 'service/:id', component: DetailServiceComponent, canActivate: [AuthGuard] }
];

@NgModule({
  //On peut ajouter Directives et Pipes
  declarations: [
    ListServiceComponent,
    DetailServiceComponent,
    BorderCardDirective,
    ServiceTypeColorPipe,
    ServiceFormComponent,
    EditServiceComponent,
    AddServiceComponent,
    SearchServiceComponent,
    LoaderComponent
  ],

  imports: [
    //J'ajoute le router module angular en l'attribuant les routes
    CommonModule,
    //On ajoute le FormModule
    FormsModule,
    RouterModule.forChild(serviceRoutes)
  ],

  //On rajoute service ici dans le service module
  providers: [ServiceService]
})
export class ServiceModule { }


