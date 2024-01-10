import { AfterViewInit, EventEmitter, Directive, ElementRef, Input, Output } from "@angular/core";

@Directive({
    selector: "[ngxSlimScroll]",
    standalone: true
})
export class NgxSlightScrollDirective implements AfterViewInit {
  @Input() maxHeight: string;
  @Input() minHeight: string;
  @Input() scrollBg: string = "#fff";
  @Input() scrollThumbBg: string = "#d9d9d9";
  @Input() scrollThumbRadius: number = 0;
  @Input() scrollWidth: number = 10;
  @Input() scrollBorder: boolean = false;

  @Output() scrollEndEvent: EventEmitter<any> = new EventEmitter<any>();

  public element: HTMLElement;

  constructor(private el: ElementRef) {
    this.element = this.el.nativeElement as HTMLElement;
    this.element.classList.add("ngx-slight-scroll");
  }

  ngAfterViewInit(): void {
    if (this.scrollBorder) {
      this.element.classList.add("ngx-slight-scroll-border");
    }
    if (this.minHeight) {
      this.element.style.minHeight = this.minHeight;
    }
    if (this.maxHeight) {
      this.element.style.maxHeight = this.maxHeight;
    }
    document.body.style.setProperty(
      "--ngx-slight-scroll-thumb-bg",
      this.scrollThumbBg
    );
    document.body.style.setProperty(
      "--ngx-slight-scroll-thumb-radius",
      this.scrollThumbRadius.toString() + "px"
    );
    document.body.style.setProperty(
      "--ngx-slight-scroll-width",
      this.scrollWidth.toString() + "px"
    );
    document.body.style.setProperty("--ngx-slight-scroll-bg", this.scrollBg);

    this.element.addEventListener("scroll", () => {
      if (
        this.element.offsetHeight + this.element.scrollTop >=
        this.element.scrollHeight
      ) {
        this.scrollEndEvent.emit();
      }
    });
  }
}
