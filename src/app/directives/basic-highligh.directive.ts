import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlighDirective implements OnInit{

  constructor(private elementRef:ElementRef) {

  }

  //nao eh boa pratica acessar diretamente seus elementos
  //como estavamos fazendo:
  //this.elementRef.nativeElement.style.backgroundColor = 'green';
  //this.elementRef.nativeElement.style.color = 'white';

  //por isso vamos acessar de outra forma na diretica better-highlight
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.elementRef.nativeElement.style.color = 'white';
  }

}
