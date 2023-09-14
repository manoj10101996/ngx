import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { COLOREVENT, RAW } from './RAW';
import { CRAYOLA } from "./CRAYOLA";
import { MATERIAL } from "./MATERIAL";

type colorMode = 'basic' | 'hsl' | 'wheel';
@Component({
  selector: 'ngx-color-palette',
  templateUrl: './ngx-color-palette.component.html',
  styleUrls: ['./ngx-color-palette.component.scss']
})
export class NgxColorPaletteComponent implements AfterViewInit {

  @Input() color: string = '';
  @Input() squared: boolean = false;

  @Output() currentColor: EventEmitter<any> = new EventEmitter<any>();

  public mode: string = 'basic';

  protected colors = RAW;
  protected crayola = CRAYOLA;
  protected material = MATERIAL;

  protected choosenColor: string = '';

  protected isShow: boolean = false;
  protected isPalette: boolean = false;

  protected paletteIndex: number = 0;

  protected iterator = Array.from(Array(360).keys());

  protected colorAxis: any[] = [];
  protected clientBox: DOMRect;
  protected randomId: string = new Date().getTime().toString();

  constructor(private elementRef: ElementRef) {
    this.randomId = new Date().getTime().toString();
  }

  ngAfterViewInit(): void {
    this.color = this.color || this.colors[0]['preview'];
    this.choosenColor = this.color;

    if (this.mode === 'wheel') {
      this.showColorWheel();
    }
  }

  protected setColor(color: string) {
    this.choosenColor = color;
  }

  protected discardCoreColor() {
    this.isShow = false;
    this.isPalette = false;
  }

  protected setCoreColor() {
    this.color = this.choosenColor;
    this.isShow = false;
    this.isPalette = false;
    let colorEvent: COLOREVENT = {
      color: this.color
    };
    this.currentColor.emit(colorEvent);
    this.mode = 'basic';
  }

  public showWheel() {
    this.mode = 'wheel';
    this.showColorWheel();
  }

  public showHsl() {
    this.mode = 'hsl';
  }

  public showCrayola() {
    this.mode = 'crayola';
  }

  public showBasic() {
    this.mode = 'basic';
    this.isPalette = false;
  }

  public showMaterial() {
    this.mode = 'material';
  }

  @HostListener('document:mousedown', ['$event'])
  protected onGlobalClick(event: any): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isShow = false;
    }
  }

  protected hslToHex(h: any, s: any, l: any) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n: any) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }

  public showColorWheel() {
    setTimeout(() => {
      let box = document.getElementById("color-box-" + this.randomId) as HTMLDivElement;
      this.clientBox = box.getBoundingClientRect();
      let rect: DOMRect = box.getBoundingClientRect();
      for (let index = 0; index < 90; index++) {
        this.colorAxis.push({
          x1: rect.width,
          y1: rect.width - (rect.width / 90) * index,
          x2: rect.width / 2,
          y2: rect.width / 2
        });
      }
      for (let index = 0; index < 90; index++) {
        this.colorAxis.push({
          x1: rect.width - (rect.width / 90) * index,
          y1: 0,
          x2: rect.width / 2,
          y2: rect.width / 2
        });
      }
      for (let index = 0; index < 90; index++) {
        this.colorAxis.push({
          x1: 0,
          y1: (rect.width / 90) * index,
          x2: rect.width / 2,
          y2: rect.width / 2
        });
      }
      for (let index = 0; index < 90; index++) {
        this.colorAxis.push({
          x1: (rect.width / 90) * index,
          y1: rect.width,
          x2: rect.width / 2,
          y2: rect.width / 2
        });
      }
    }, 500);
  }

  public randomColor(): string {
    return '#' + ((1 << 24) * (Math.random() + 1) | 0).toString(16).substr(1);
  }
}
