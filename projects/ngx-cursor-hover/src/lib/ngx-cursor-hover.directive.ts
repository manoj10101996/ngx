import { AfterViewInit, Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[ngxCursor]"
})
export class NgxCursorHoverDirective implements AfterViewInit {
  @Input() cursor: string = "pointer";
  private element: HTMLElement;
  constructor(private el: ElementRef) {
    this.element = this.el.nativeElement;
  }

  ngAfterViewInit(): void {
    this.element.classList.add("ngx-cursor-hover-" + this.cursor);
  }
}
