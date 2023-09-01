import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDcustome]'
})
export class DcustomeDirective {

  constructor(private render:Renderer2,private el:ElementRef) { }
  @HostListener('mouseenter') onMouseenter(){
    this.chang('blue')


  }
  @HostListener('mouseleave') onMouseleave(){
    this.chang(null)


  }

  private chang(color:string|null){
    this.render.setStyle(this.el.nativeElement,'background-color',color)

  }
}
