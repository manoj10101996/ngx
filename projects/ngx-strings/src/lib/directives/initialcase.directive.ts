import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngxInitialCase]',
})
export class InitialcaseDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'text-transform', 'initial');
  }
}
