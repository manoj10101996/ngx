# Welcome to ngx-prime-color-picker!

Our tool offers a vast palette of hues at your fingertips. Easily select the perfect color for your designs with precise controls and intuitive interface.

<img width="128px" src="https://github.com/manoj10101996/resources/blob/main/ngx-prime-color-picker.png?raw=true"/>

**This package is designed to work exclusively with Angular standalone components. Please ensure your project is configured accordingly.**

    npm i ngx-prime-color-picker

[![ngx-prime-color-picker](https://img.shields.io/npm/dm/ngx-prime-color-picker.svg)](https://npmjs.org/package/ngx-prime-color-picker)
[![npm version](https://badge.fury.io/js/ngx-prime-color-picker.svg)](https://badge.fury.io/js/ngx-prime-color-picker)
[![](https://data.jsdelivr.com/v1/package/npm/ngx-prime-color-picker/badge)](https://www.jsdelivr.com/package/npm/ngx-prime-color-picker)

<!-- [![ngx-prime-color-picker](https://snyk.io//advisor/npm-package/ngx-prime-color-picker/badge.svg)](https://snyk.io//advisor/npm-package/ngx-prime-color-picker) -->

### Precise color selection, effortlessly.

Our tool offers a vast palette of hues at your fingertips. Easily select the perfect color for your designs with precise controls and intuitive interface.

---

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-prime-color-picker-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-prime-color-picker)

---

## [<img src="https://github.com/manoj10101996/resources/blob/main/ngx-prime-color-picker-poster.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-prime-color-picker)

## Import

Import the module on your `app.module.ts` file as follow.

```HTML
<ngx-prime-color-picker
  [color]="color"
  (getCurrentColorObject)="currentColorObject($event)"

  [showConversionTable]="true"
  [showLightness]="true"
  [showColorPalette]="true"
  [showGradient]="true"
  [showSaturation]="true"
></ngx-prime-color-picker>
```

On Your component file (TS)

```TS
import { NgxPrimeColorPickerComponent, COLOROBJECT } from "ngx-prime-color-picker";

@Component({
  selector: '...',
  standalone: true,
  imports: [NgxPrimeColorPickerComponent],
  templateUrl: '...',
  styleUrl: '...'
})
export class YourComponent {

  public color = '#ff9800';

  public currentColorObject(event: COLOROBJECT) {
    console.log('event: ', event);
  }
  // Sample output
  // {
  //   "red": 234,
  //   "green": 155,
  //   "blue": 36,
  //   "hue": 36,
  //   "sat": 0.82,
  //   "lightness": 0.53,
  //   "whiteness": 0.14,
  //   "blackness": 0.08,
  //   "cyan": 0,
  //   "magenta": 0.34,
  //   "yellow": 0.85,
  //   "black": 0.08,
  //   "ncol": "R60",
  //   "opacity": 1,
  //   "valid": true,
  //   "hex": "#ea9b24"
  // }

}
```

| Bind Variable       | Usage                            | Default   |
| ------------------- | -------------------------------- | --------- |
| color               | Current color / Choosed Color    | '#ff0000' |
| showGradient        | Enables Gradient Picker          | false     |
| showConversionTable | Enables Color conversion table   | false     |
| showColorPalette    | Enables Exteneded Color Palettes | false     |
| showLightness       | Enables Lightness slider         | false     |
| showSaturation      | Enables Saturation slider        | false     |
|                     |                                  |           |

---

| Bind Method                   | Usage                    |
| ----------------------------- | ------------------------ |
| getCurrentColorObject($event) | Get changed color object |
|                               |                          |

---

## Code integration

To use this package as a service `npm i ngx-prime-color-picker` install this on the root angular project .

> Note: Don't forget to run this commend `npm i ngx-prime-color-picker` on root folder or else it will throw error.

---

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-prime-color-picker-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-prime-color-picker)

---
