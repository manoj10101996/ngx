/*
 * Public API Surface of ngx-color-converter
 */

export * from './lib/ngx-color-converter.service';
export * from './lib/ngx-color-converter.component';

export interface COLOROBJECT {
  red: number;
  green: number;
  blue: number;
  hue: number;
  sat: number;
  lightness: number;
  whiteness: number;
  blackness: number;
  cyan: number;
  magenta: number;
  yellow: number;
  black: number;
  ncol: string;
  opacity: number;
  valid: boolean;
}
