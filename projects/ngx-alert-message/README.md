<img width="256px" src="https://icon.beforepost.com/5IQN2B2I-Z8A260K8-CLI06PQ9.svg"/>

# Alert message notifier

[![](https://data.jsdelivr.com/v1/package/npm/ngx-alert-message/badge)](https://www.jsdelivr.com/package/npm/ngx-alert-message)

Alert component for angular projects. Creative alert message with mutiple color variance.

## Import

Import the module on your `app.module.ts` file as follow.

`import { NgxAlertMessageModule } from "ngx-alert-message";`

Then import the module as follow on imports array

> NgxAlertMessageModule

## Using

After importing this library with `npm install ngx-alert-message`, go to the component which is declared under `app.module.ts` and integrate as below.

## just alert module

`<ngx-just-alert [close]="close" [mode]="mode" [bold]="bold" [disabled]="'true'" [text]="text"></ngx-just-alert>`

```
close : (required) value shoule be `true | false`

mode : (required) value shoule be `primary | success | danger | info | warning`

bold : (optional) value shoule be `true | false`

text : (required) value shoule be `anything...`

disabled : (optional) value shoule be `true | false`
```

<img  src="https://raw.githubusercontent.com/manoj10101996/resources/main/ngx-alert-message.png"/>

## Alert module

`<ngx-alert [close]="close" [mode]="mode" [bold]="bold" [disabled]="'true'" [text]="text"></ngx-alert>`

```
close : (required) value shoule be `true | false`

mode : (required) value shoule be `primary | success | danger | info | warning`

bold : (optional) value shoule be `true | false`

text : (required) value shoule be `anything...`

disabled : (optional) value shoule be `true | false`
```


<img  src="https://raw.githubusercontent.com/manoj10101996/resources/main/ngx-alert-message-1.png"/>

[![Visit beforepost.com for awesome color palettes &  extract colors and text from any source](https://github.com/manoj10101996/resources/blob/main/npm-pack-beforepost.png?raw=true)](https://www.beforepost.com/)
