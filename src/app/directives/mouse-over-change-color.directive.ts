import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseOverChangeColor]'
})


export class MouseOverChangeColorDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor:string = 'yellow';

  constructor(private elRef: ElementRef ,private renderer: Renderer2) { }
  
  ngOnInit(): void {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    this.renderer.setStyle(this.elRef.nativeElement, 'color','red');
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    this.backgroundColor = 'blue';
    this.renderer.setStyle(this.elRef.nativeElement, 'color','white');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent');
    this.backgroundColor = 'transparent';
    this.renderer.setStyle(this.elRef.nativeElement, 'color','red');
  }

}
