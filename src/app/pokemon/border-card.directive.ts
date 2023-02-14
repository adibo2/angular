import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  constructor(private el:ElementRef) {
    //du moment on applique notre directive sur le dom
    // this.setheight(180)
    this.setborder('green')
   }

   @HostListener('mouseenter') onMouseEnter() {
    this.setborder('red')
   }
   @HostListener('mouseleave') onMouseLeave() {
    this.setborder('green')
   }

  // setheight(height:number){
  //   this.el.nativeElement.style.height = `${height}px`;
  // }
  setborder(color:string){
    this.el.nativeElement.style.border =`solid 10px ${color}`;
  }

}
