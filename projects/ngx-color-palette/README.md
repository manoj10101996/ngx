<img width="256px" src="https://github.com/manoj10101996/resources/blob/main/ngx-color-palette.png?raw=true"/>

# Color picker (ngx-color-palette)

<!-- [![ngx-color-palette](https://img.shields.io/npm/dm/ngx-color-palette.svg)](https://npmjs.org/package/ngx-color-palette)
[![npm version](https://badge.fury.io/js/ngx-color-palette.svg)](https://badge.fury.io/js/ngx-color-palette)
[![](https://data.jsdelivr.com/v1/package/npm/ngx-color-palette/badge)](https://www.jsdelivr.com/package/npm/ngx-color-palette) -->

Angular library which provides color picker functionality to your angular application.

A color picker is a graphical user interface widget, usually found within graphics software or online, used to select colors and, in some cases, to create color schemes. 
---

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-color-palette.gif?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-color-palette)

---

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-color-palette-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-color-palette)

---

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-color-palette-poster-2.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-color-palette)


## Import

Import the module on your `app.module.ts` file as follow.

> import { NgxColorPaletteModule } from 'ngx-color-palette';

Then import the module as follow on imports array

> NgxColorPaletteModule

## Integration

```
<ngx-color-palette [color]="'red'" (currentColor)="currentColor($event)"></ngx-color-palette>
```

on .html

```
<ngx-color-palette  [color]="color" [squared]="false" (currentColor)="currentColor($event)"></ngx-color-palette>
```

on .ts

```TS
color = '#FBC02D'; // any color value (name / hex / rgb / hsl)

public currentColor(event: any) { // to receive output
  this.color = event.color;
}
```

| Field        | type           | Info                           |
| ------------ | -------------- | ------------------------------ |
| color        | string         | Variable to bind               |
| squared      | boolean        | Non-rounded egdes              |
| currentColor | event / method | to get changed / emitted value |


[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-color-palette-poster.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-color-palette)

## Code integration

To use this package as a service `npm i ngx-color-palette` install this on the root angular project .

> Note: Don't forget to run this commend `npm i ngx-color-palette` on root folder or else it will throw error.

---

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-color-palette-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-color-palette)

---
