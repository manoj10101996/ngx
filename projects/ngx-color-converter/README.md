<img width="256px" src="https://icon.beforepost.com/EYK7RBDV-3E93PTQN-LSO3EATX.svg"/>

# Welcome to ngx-color-converter!

[![ngx-color-converter](https://img.shields.io/npm/dm/ngx-color-converter.svg)](https://npmjs.org/package/ngx-color-converter)
[![npm version](https://badge.fury.io/js/ngx-color-converter.svg)](https://badge.fury.io/js/ngx-color-converter)
[![](https://data.jsdelivr.com/v1/package/npm/ngx-color-converter/badge)](https://www.jsdelivr.com/package/npm/ngx-color-converter)
[![ngx-color-converter](https://snyk.io//advisor/npm-package/ngx-color-converter/badge.svg)](https://snyk.io//advisor/npm-package/ngx-color-converter)

Convert your color value to different variants. Color is the aspect of things that is caused by differing qualities of light being reflected or emitted by them.

---

## [<img src="https://github.com/manoj10101996/resources/blob/main/ngx-color-converter-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-color-converter)

## Import

Import the module on your `app.module.ts` file as follow.

```TS
import { NgxColorConverterService, COLOROBJECT } from 'ngx-color-converter';

...

export class YourComponent {

  protected colors = inject(NgxColorConverterService);

  (or)

  constructor(private colors: NgxColorConverterService) {
    let colorObject:COLOROBJECT = this.colors.toColorObject('#000fff');
    console.log(colorObject);

    // Sample Output
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
    // }
  }

}
```

Then import the module as follow on imports array

```
NgxColorConverterModule
```

<img src="https://package-sources.s3.amazonaws.com/ngx-color-converter.PNG">

## Service

```
import { NgxColorConverterService, COLOROBJECT } from 'ngx-color-converter';

constructor(private colors: NgxColorConverterService) { }
```

Use reference for logs service in constructor and import it respectively at any component

## Methods

You can use below methods as part of service by following

```TS
let colorObject:COLOROBJECT = this.colors.toColorObject('#000fff');
```

```TS
color:any - (hex - name - rgb - hsl - hwb - cmyk - ncol)
```

```TS
import { COLOROBJECT } from 'ngx-color-converter';

...

constructor(private colors: NgxColorConverterService) {
  let colorObject:COLOROBJECT = this.colors.toColorObject('#000fff');
  console.log(this.colors.toColorObject('#000fff'));
  console.log(this.colors.toColorObject('crimson'));
  console.log(this.colors.toColorObject('rgb(0,0,0)'));
  console.log(this.colors.toColorObject('hsl(100,2,4)'));
  console.log(this.colors.toColorObject('cymk(1,2,3,4)'));
}
```

Which will return converted color object.

With these converted values you can play any method given below. Happy Coding <3

| Method                                                | Arguments                                                | usage       |
| ----------------------------------------------------- | -------------------------------------------------------- | ----------- |
| toColorObject(color)                                  | color:any - (hex - name - rgb - hsl - hwb - cmyk - ncol) | COLOROBJECT |
| hslToRgb(hue, sat, light)                             | hue, sat, light                                          |
| hwbToRgb(hue, white, black)                           | hue, white, black                                        |
| cmykToRgb(c, m, y, k)                                 | c, m, y, k                                               |
| ncolToRgb(ncol, white, black)                         | ncol, white, black                                       |
| hueToNcol(hue)                                        | hue                                                      |
| ncsToRgb(ncs)                                         | ncs                                                      |
| rgbToHsl(r , g , b )                                  | r, g, b                                                  |
| rgbToHwb(r , g , b )                                  | r, g, b                                                  |
| rgbToCmyk(red , green , blue )                        | red,green,blue                                           |
| --                                                    | --                                                       | --          |
| toRgbString(red , green , blue )                      |                                                          |
| toRgbaString(red , green , blue , alpha )             |                                                          |
| toHwbString(hue , whiteness , blackness )             |                                                          |
| toHwbStringDecimal(hue , whiteness , blackness )      |                                                          |
| toHwbaString(hue , whiteness , blackness , alpha )    |                                                          |
| toHslString(hue , sat , lightness )                   |                                                          |
| toHslStringDecimal(hue , sat , lightness )            |                                                          |
| toHslaString(hue , sat , lightness , alpha )          |                                                          |
| toCmykString(cyan , magenta , yellow , black )        |                                                          |
| toCmykStringDecimal(cyan , magenta , yellow , black ) |                                                          |
| toNcolString(ncol , whiteness , blackness )           |                                                          |
| toNcolStringDecimal(ncol , whiteness , blackness )    |                                                          |
| toNcolaString(ncol , whiteness , blackness , alpha )  |                                                          |
| toHexString(red , green , blue )                      |                                                          |
| toRgb(red , green , blue , alpha )                    |                                                          |
| toHsl(hue , sat , lightness , alpha )                 |                                                          |
| toHwb(hue , whiteness , blackness , alpha )           |                                                          |
| toCmyk(cyan , magenta , yellow , black , alpha )      |                                                          |
| toNcol(ncol , whiteness , blackness , alpha )         |                                                          |

This are the methods available with ngx-color-converter use it as per your requirement:

## Code integration

To use this package as a service `npm i ngx-color-converter` install this on the root angular project .

> Note: Don't forget to run this commend `npm i ngx-color-converter` on root folder or else it will throw error.

---

## [<img src="https://github.com/manoj10101996/resources/blob/main/ngx-color-converter-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-color-converter)

---
