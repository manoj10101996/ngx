<img width="256px" src="https://icon.beforepost.com/TAQMDH9I-2D87SQAT-7JIS54O8.svg"/>

# Welcome to ngx-toast-notify!


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

Import the module on your `app.module.ts` file as follow.

> import { NgxToastNotifyModule , NgxToastNotifyService } from "ngx-toast-notify";

```
@NgModule({
declarations: [AppComponent],
imports: [
	BrowserModule,
	AppRoutingModule,
	NgxToastNotifyModule.forRoot({
			toastTimeoutInSeconds:  10,
			animationDelayInMilliSeconds:  500,
			enableClosebutton:  true,
			position:  'top-right',
			backgroundColor:  '',
			textColor:  ''
	})
],
providers: [NgxToastNotifyService],
bootstrap: [AppComponent]
})
```

On a _component_ or _service_ inject the toast service as follows

> import { NgxToastNotifyService } from 'ngx-toast-notify';

```
constructor(private  toast: NgxToastNotifyService) {}

public showToastTopRight() {
	this.toast.showToast('Toast text', 'warning', 'top-right');
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
