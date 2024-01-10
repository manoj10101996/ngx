import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
    selector: '[ngxStringSlicer]',
    standalone: true,
})
export class StringcutDirective implements OnInit {
  @Input() start: number;
  @Input() end: number;
  @Input() overflow: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    let actualText: string;
    actualText = this.el.nativeElement.textContent;
    actualText = actualText.slice(this.start, this.end);
    if (this.overflow === true) {
      this.el.nativeElement.textContent = actualText + '...';
    } else {
      this.el.nativeElement.textContent = actualText;
    }
  }
}
