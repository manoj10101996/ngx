import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[ngxLineLimit]',
    standalone: true,
})
export class LinelimitDirective implements OnInit {
  @Input() lines: string;
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
    this.renderer.setStyle(this.el.nativeElement, 'display', '-webkit-box');
    this.renderer.setStyle(
      this.el.nativeElement,
      '-webkit-line-clamp',
      this.lines
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      '-webkit-box-orient',
      'vertical'
    );
  }
}
