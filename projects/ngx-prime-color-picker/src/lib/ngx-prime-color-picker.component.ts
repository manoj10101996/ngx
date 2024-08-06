
import { NgxColorConverterService } from 'ngx-color-converter';

import { AfterViewInit, Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ngx-prime-color-picker',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './ngx-prime-color-picker.html',
  styleUrls: ['./ngx-prime-color-picker.scss']
})
export class NgxPrimeColorPickerComponent implements AfterViewInit {

  @Input() showConversionTable: boolean = true;
  @Input() showSaturation: boolean = true;
  @Input() showLightness: boolean = true;
  @Input() showColorPalette: boolean = true;
  @Input() showGradient: boolean = true;

  public gradintPickerId: string = 'color-canvas-' + (Math.random() + 1).toString(36).substring(7);
  public position: {
    offsetX: number,
    offsetY: number
  } = {
      offsetX: 270 - 15,
      offsetY: 15
    };
  public degrees: number[] = [];
  public primeColors: number[] = [];

  public saturationGradientString = `
      -webkit-linear-gradient(left,
        hsla(0, 0%, 50%, 1),
        hsla(0, 20%, 50%, 1),
        hsla(0, 40%, 50%, 1),
        hsla(0, 60%, 50%, 1),
        hsla(0, 80%, 50%, 1),
        hsla(0, 100%, 50%, 1))`;

  public lightnessGradientString = `
      -webkit-linear-gradient(left,
        hsla(0, 100%, 0%, 1),
        hsla(0, 100%, 20%, 1),
        hsla(0, 100%, 40%, 1),
        hsla(0, 100%, 60%, 1),
        hsla(0, 100%, 80%, 1),
        hsla(0, 100%, 100%, 1))`

  public hslObject: { h: number, s: number, l: number } = { h: 360, s: 100, l: 50 };
  public canvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;
  public color: string = '#e52222ff';
  public pointer: HTMLDivElement;

  protected colors = inject(NgxColorConverterService);
  public objectColors: any;

  constructor() {
    this.degrees = Array.from(Array(360).keys());
    this.primeColors = Array.from(Array(13).keys());
  }

  ngAfterViewInit(): void {
    this.canvas = document.getElementById(this.gradintPickerId) as HTMLCanvasElement;
    let width: number = 270;
    this.canvas.style.width = width + "px";
    this.canvas.style.height = ((width / 16) * 9) + "px";

    this.context = this.canvas.getContext("2d", { willReadFrequently: true }) as CanvasRenderingContext2D;

    if (this.context && this.canvas) {
      this.createRGBGradient();

      this.canvas.addEventListener('click', (event) => {
        this.position.offsetX = event.offsetX;
        this.position.offsetY = event.offsetY;
        this.color = this.bufferToHex(this.context.getImageData(this.position.offsetX, this.position.offsetY, 1, 1).data);
        this.colorObject();
      });

      this.pointer = document.getElementById('picker-gradient-pointer') as HTMLDivElement;

      this.canvas.addEventListener('dragover', (event) => {
        this.position.offsetX = event.offsetX;
        this.position.offsetY = event.offsetY;
        this.color = this.bufferToHex(this.context.getImageData(this.position.offsetX, this.position.offsetY, 1, 1).data);
        this.colorObject();
      });
    }
  }

  public colorObject() {
    this.objectColors = this.colors.toColorObject(this.color);
    this.objectColors['hex'] = this.colors.toHexString(this.objectColors.red, this.objectColors.green, this.objectColors.blue);
  }

  public bufferToHex(buffer: Uint8ClampedArray) {
    return '#' + [...new Uint8Array(buffer)].map(x => x.toString(16).padStart(2, '0')).join('');
  }

  public createRGBGradient() {

    this.saturationGradientString = `
      -webkit-linear-gradient(left,
        hsla(${this.hslObject.h}, 0%, 50%, 1),
        hsla(${this.hslObject.h}, 20%, 50%, 1),
        hsla(${this.hslObject.h}, 40%, 50%, 1),
        hsla(${this.hslObject.h}, 60%, 50%, 1),
        hsla(${this.hslObject.h}, 80%, 50%, 1),
        hsla(${this.hslObject.h}, 100%, 50%, 1))`;

    this.lightnessGradientString = `
        -webkit-linear-gradient(left,
          hsla(${this.hslObject.h}, 100%, 0%, 1),
          hsla(${this.hslObject.h}, 100%, 20%, 1),
          hsla(${this.hslObject.h}, 100%, 40%, 1),
          hsla(${this.hslObject.h}, 100%, 60%, 1),
          hsla(${this.hslObject.h}, 100%, 80%, 1),
          hsla(${this.hslObject.h}, 100%, 100%, 1))`;

    this.fillGradient();
  }

  public createFromPalette() {
    this.position.offsetX = 270 - 15;
    this.position.offsetY = 15;

    this.fillGradient();
  }

  public fillGradient() {
    const rgb = this.hsl2rgb();
    const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    // Create linear gradient
    const coreGradient = this.context.createLinearGradient(0, this.canvas.width / 2, this.canvas.width, this.canvas.width / 2);
    coreGradient.addColorStop(0, "rgb(255, 255, 255)");
    coreGradient.addColorStop(1, rgbString);

    // Fill rectangle with gradient
    this.context.fillStyle = coreGradient;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);


    // Create linear gradient
    const blackGradient = this.context.createLinearGradient(this.canvas.width / 2, 0, this.canvas.width / 2, this.canvas.width / 2);
    blackGradient.addColorStop(0, "transparent");
    blackGradient.addColorStop(1, "rgb(0, 0, 0)");

    // Fill rectangle with gradient
    this.context.fillStyle = blackGradient;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.color = this.bufferToHex(this.context.getImageData(this.position.offsetX, this.position.offsetY, 1, 1).data);

    this.colorObject();
  }


  public hsl2rgb() {
    let { h, s, l } = this.hslObject;

    // IMPORTANT if s and l between 0,1 remove the next two lines:
    s /= 100
    l /= 100

    const k = (n: number) => (n + h / 30) % 12
    const a = s * Math.min(l, 1 - l)
    const f = (n: number) =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
    return {
      r: Math.round(255 * f(0)),
      g: Math.round(255 * f(8)),
      b: Math.round(255 * f(4)),
    }
  }
}
