import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[ngxTitleCase]',
    standalone: true,
})
export class TitlecaseDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'text-transform',
      'capitalize'
    );
  }
}
