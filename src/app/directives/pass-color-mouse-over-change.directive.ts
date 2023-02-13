import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPassColorMouseOverChange]'
})


export class PassColorMouseOverChangeDirective implements OnInit{

  @Input() defaultColor:string = 'gray';
  @Input() highlightColor:string = 'purple';
  @HostBinding('style.backgroundColor') backgroundColor:string = this.defaultColor;

  constructor(private elRef: ElementRef ,private renderer: Renderer2) { }
  
  ngOnInit(): void {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    this.renderer.setStyle(this.elRef.nativeElement, 'color','red');
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    this.backgroundColor = this.highlightColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'color','white');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent');
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'color','red');
  }

}
