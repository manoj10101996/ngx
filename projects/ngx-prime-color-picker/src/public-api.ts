/*
 * Public API Surface of ngx-prime-color-picker
 */

export * from './lib/ngx-prime-color-picker.service';
export * from './lib/ngx-prime-color-picker.component';
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
  hex: string;
}
