import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[ngxResize]',
    standalone: true
})
export class NgxResizeElementDirective {
  public element: HTMLElement;

  constructor(private el: ElementRef) {
    this.element = this.el.nativeElement as HTMLElement;
    this.element.style.resize = "both";
    this.element.style.overflow = "auto";
  }
}
