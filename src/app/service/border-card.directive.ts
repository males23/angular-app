//on rajoute ElementRef et HostListener
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  //on peut changer le nom du selector en svcBorderCard
  selector: '[appBorderCard]'
})
export class BorderCardDirective {
  private initialColor: string = '#808000';
  private defaultColor: string = '#f5f5f9';
  private defaultHeight: string = '205';


//on va appler les deux methodes height et color
  constructor(private el: ElementRef) {
    this.setHeight(205);
    this.setBorder('#f5f5');
   }

   //Personnaliser la couleur de chaque cadre
   @Input('appBorderCard')
  borderColor!: string;

//On ecoute l'evenement mouseenter 
   @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

//On quitte l'evenement via mouseleave
  @HostListener('mouseleave') onMouseLeave() {
     this.setBorder(this.initialColor);
    }

  /** on cree une methode setHeight pour definir
  une hauteur commune **/
  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }
/** on cree une methode setBorder pour definir
une couleur commune **/
 private setBorder(color: string) {
  let border = 'solid 4px ' + color;
  this.el.nativeElement.style.border = border;
}
}
