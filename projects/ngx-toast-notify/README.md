<img width="256px" src="https://icon.beforepost.com/TAQMDH9I-2D87SQAT-7JIS54O8.svg"/>

# Welcome to ngx-toast-notify!

## For Angular 17 + (standalone component)

[![ngx-toast-notify](https://img.shields.io/npm/dm/ngx-toast-notify.svg)](https://npmjs.org/package/ngx-toast-notify)
[![npm version](https://badge.fury.io/js/ngx-toast-notify.svg)](https://badge.fury.io/js/ngx-toast-notify)
[![](https://data.jsdelivr.com/v1/package/npm/ngx-toast-notify/badge)](https://www.jsdelivr.com/package/npm/ngx-toast-notify)
[![ngx-toast-notify](https://snyk.io//advisor/npm-package/ngx-toast-notify/badge.svg)](https://snyk.io//advisor/npm-package/ngx-toast-notify)

Push notifications to your visitors with a toast, a lightweight and easily customizable alert message with custom theme based.

Features: **Positioned toast notifications with allows custom theme as responsive**

Install: **`npm install ngx-toast-notify`**

---

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-toast-notify-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-toast-notify)

---

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-toast-notify-poster.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-toast-notify)

## Import

On a _component_ or _service_ inject the toast service as follows

> import { NgxToastNotifyService } from 'ngx-toast-notify';

```TS
constructor(private  toast: NgxToastNotifyService) {}

public showToastTopLeft() {
  this.NgxToastNotifyService.showToast("Top left", "primary", "top-left");
}

public showToastTopRight() {
  this.NgxToastNotifyService.showToast("Top right", "warning", "top-right");
}

public showToastBottomLeft() {
  this.NgxToastNotifyService.showToast("Bottom left", "info", "bottom-left");
}

public showToastBottomRight() {
  this.NgxToastNotifyService.showToast( "bottom-right", "danger", "bottom-right");
}

public showToastTopCenter() {
  this.NgxToastNotifyService.showToast("top-center", "dark", "top-center");
}

public showToastBottomCenter() {
  this.NgxToastNotifyService.showToast("bottom-center", "light", "bottom-center");
}
```

```
Workflow:
showToast(text: string, mode: string, position: string): Creates toast notification.

text  — : Toast text to be shown. - String
mode  — : Toast appearance as - primary | warning | danger | success | info - String
position  — : Toast position at - top-left | top-right | bottom-left | bottom-right | top-center | bottom-center
```

---

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-toast-notify-poster.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-toast-notify)

---

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-toast-notify-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-toast-notify)

---
