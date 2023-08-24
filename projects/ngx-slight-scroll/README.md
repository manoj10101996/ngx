<img width="256px" alt="ngx-slight-scroll" src="https://icon.beforepost.com/2KRP6DWE-F005AU3Y-1SKBC1EC.svg"/>

# ngx-slight-scroll (latest)

[![ngx-slight-scroll](https://img.shields.io/npm/dm/ngx-slight-scroll.svg)](https://npmjs.org/package/ngx-slight-scroll)
[![npm version](https://badge.fury.io/js/ngx-slight-scroll.svg)](https://badge.fury.io/js/ngx-slight-scroll)
[![](https://data.jsdelivr.com/v1/package/npm/ngx-slight-scroll/badge)](https://www.jsdelivr.com/package/npm/ngx-slight-scroll)
<!-- [![ngx-slight-scroll](https://snyk.io//advisor/npm-package/ngx-slight-scroll/badge.svg)](https://snyk.io//advisor/npm-package/ngx-slight-scroll) -->

- The CSS scrollbars styling module defines properties that you can use for visual styling of scrollbars. You can customize the width of the scrollbar as required. You can also customize the color of the scrollbar track, which is the background of the scrollbar, and the color of the scrollbar thumb, which is the draggable handle of the scrollbar.

- `ngxSlimScroll` Add directive to any HTML block element in order to enable scrollbar.

# Import Style

- [x] Import using CSS CDN and Add it to your application

``` HTML
<link rel="stylesheet" href="https://cdn.beforepost.com/neptune/ngx-slight-scroll-minified.css">
```

Add `crossorigin` attribute as (use-credentials or anonymous) to link element if required.

- [x] Directly add it to your Css / Scss file.

``` CSS
@import url("https://cdn.beforepost.com/neptune/ngx-slight-scroll-minified.css");
```



[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-slight-scroll-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-slight-scroll)

---

### Import

Import the module on your `app.module.ts` file as follow.

> import { NgxSlightScrollModule} from "ngx-slight-scroll";

### Add to imports

```
imports: [
  ...
  NgxSlightScrollModule
  ...
],
```

### Core function

```
<div class="card-body"
    [maxHeight]="'600px'"
    [minHeight]="'300px'"
    [scrollWidth]="12"
    [scrollThumbBg]="'darkblue'"
    [scrollBorder]="false"
    [scrollThumbRadius]="0"
    [scrollBg]="'white'"
    (scrollEndEvent)="scrollEndEvent($event)"

    ngxSlimScroll

    >

    <!-- Content goes here... -->

</div>
```

| Attribute         | Type    | value                          | Required |
| ----------------- | ------- | ------------------------------ | -------- |
| maxHeight         | string  | px, vh, rem, any               | optional |
| minHeight         | string  | px, vh, rem, any               | optional |
| scrollWidth       | number  | 0 - any                        | optional |
| scrollBg          | string  | css color, hex, name, rgb, any | optional |
| scrollThumbBg     | string  | css color, hex, name, rgb, any | optional |
| scrollBorder      | boolean | true, false                    | optional |
| scrollThumbRadius | number  | 0 - 100                        | optional |

| function       | Type | Description                       | Required |
| -------------- | ---- | --------------------------------- | -------- |
| scrollEndEvent | any  | callback when scroll reach bottom | optional |

---

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-slight-scroll-poster.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-slight-scroll)

 

### Code integration

To use this package as a service `npm i ngx-slight-scroll` install this on the root angular project .

> Note: Don't forget to run this commend `npm i ngx-slight-scroll` on root folder or else it will throw error.

Then import the module as follow on imports array

> NgxResizeElementModule


[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-slight-scroll-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-slight-scroll)
 