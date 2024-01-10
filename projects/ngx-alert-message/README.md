<img width="256px" src="https://icon.beforepost.com/5IQN2B2I-Z8A260K8-CLI06PQ9.svg"/>

# Alert message notifier

## For Angular 17 + (standalone component)

[![](https://data.jsdelivr.com/v1/package/npm/ngx-alert-message/badge)](https://www.jsdelivr.com/package/npm/ngx-alert-message)

Alert component for angular projects. Creative alert message with mutiple color variance.

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-alert-message-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-alert-message)

## Import

Import the module on your `your-component.component.ts` file as follow.

`import { AlertComponent, JustAlertComponent } from 'ngx-alert-message';`

Then import the module as follow on imports array

`@Component({
  selector: '...',
  templateUrl: '...',
  styleUrls: ['...'],
  standalone: true,
  imports: [AlertComponent, JustAlertComponent]
})`

## Using

After importing this library with `npm install ngx-alert-message`,

## just alert module

```
<ngx-just-alert [close]="close" [mode]="mode" [bold]="bold" [disabled]="'true'" [text]="text"></ngx-just-alert>
```

```
close : (required) value shoule be `true | false`

mode : (required) value shoule be `primary | success | danger | info | warning`

bold : (optional) value shoule be `true | false`

text : (required) value shoule be `anything...`

disabled : (optional) value shoule be `true | false`
```

<img width="100%" src="https://raw.githubusercontent.com/manoj10101996/resources/main/ngx-alert-message.png"/>

---

## Alert module

```
<ngx-alert [close]="close" [mode]="mode" [bold]="bold" [disabled]="'true'" [text]="text"></ngx-alert>
```

```
close : (required) value shoule be `true | false`

mode : (required) value shoule be `primary | success | danger | info | warning`

bold : (optional) value shoule be `true | false`

text : (required) value shoule be `anything...`

disabled : (optional) value shoule be `true | false`
```

<img width="100%" src="https://raw.githubusercontent.com/manoj10101996/resources/main/ngx-alert-message-1.png"/>

---

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-alert-message-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-alert-message)

---
