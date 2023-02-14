import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;
  
  /*@HostListener('click') toogleOpen(){
    this.isOpen = !this.isOpen;
  }*/

  //clicar em qualquer lugar da pagina para fechar o dropdown
  @HostListener('document:click',['$event']) toogleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target);
  }

  constructor(private elRef:ElementRef) { }
  //constructor() { }

}
