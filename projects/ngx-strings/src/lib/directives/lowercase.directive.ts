import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngxLowerCase]',
})
export class LowercaseDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'text-transform',
      'lowercase'
    );
  }
}
