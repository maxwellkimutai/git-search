import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {

  constructor(private elem:ElementRef) {
       this.elem.nativeElement.style.color='#00cc66';
   }

}
