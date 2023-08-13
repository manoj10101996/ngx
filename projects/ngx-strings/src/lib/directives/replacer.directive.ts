import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngxStringReplacer]',
})
export class ReplacerDirective {
  @Input() from: string;
  @Input() to: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    let find = this.from;
    let re = new RegExp(find, 'g');

    let actualText: string;
    actualText = this.el.nativeElement.textContent;
    actualText = actualText.replace(re, this.to);
    this.el.nativeElement.textContent = actualText;
  }
}
