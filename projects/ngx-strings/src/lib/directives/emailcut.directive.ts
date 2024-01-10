import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[ngxEmailSlicer]',
    standalone: true,
})
export class EmailcutDirective {
  @Input() invalid: string;
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    let actualText: string;
    this.invalid = this.invalid ? this.invalid : 'Invalid Email!';
    actualText = this.el.nativeElement.textContent;
    if (actualText.includes('@') && actualText.includes('.')) {
      let email = actualText.split('@');
      let pre = '';
      let post = '';
      pre = email[0].trim();
      post = email[1].trim();
      pre = pre.slice(0, -5);
      post = post.substr(1, post.length);
      this.el.nativeElement.textContent = pre + '****' + post;
    } else {
      this.el.nativeElement.textContent = this.invalid;
      this.renderer.setStyle(this.el.nativeElement, 'color', 'crimson');
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    }
  }
}
