import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, debounce, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Service } from '../service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-search-service',
  templateUrl: './search-service.component.html'
})
export class SearchServiceComponent implements OnInit {
  /**Propriete representant le flux des recherches de l'user
   * Subbject pilote un Observable et dans la recherche 
   * on aura par exemple ..."a"..."ab"..."abz"..... */
  searchTerms = new Subject<string>();
  services$!: Observable<Service[]>;

  constructor(
    private router: Router,
    private serviceService: ServiceService
    ) { }

  ngOnInit(): void {
  /** On va maintenant connecter notre champ recherche */
    this.services$ = this.searchTerms.pipe(
      //On prend en compte chaque lettre que l'user tape
      debounceTime(300), //elimine les recherches qui n'ont pas 300 ms d'attente
      distinctUntilChanged(), //elimine les recherches qui sont identiques
      switchMap((term) => this.serviceService.searchServiceList(term)) //switchMap annule la derniere recherche pour la new
    );
  }

  //Methode renvoyant les termes de recherche de l'user
  search(term: string) {
    /** Quand l'user tape la recherche, on la pousse ici
     *  comme push mais avec un flux */
    this.searchTerms.next(term);
  }

/** Methode quand l'user cliquera sur l'un des resultats de sa recherche
 * le redirriger vers la page correspondante */
goToDetail(service: Service) {
  const link = ['/service', service.id];
  this.router.navigate(link);
}

}
