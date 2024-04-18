<img width="256px" src="https://icon.beforepost.com/5IQN2B2I-Z8A260K8-CLI06PQ9.svg"/>

# Alert message notifier

## For Angular 17 + (standalone component)

[![](https://data.jsdelivr.com/v1/package/npm/ngx-alert-message/badge)](https://www.jsdelivr.com/package/npm/ngx-alert-message)

Alert component for angular projects. Creative alert message with mutiple color variance.

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-alert-message-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-alert-message)

## Import

Import the module on your `your-component.component.ts` file as follow.

```TS
import { AlertComponent, JustAlertComponent } from 'ngx-alert-message';`
```

Then import the module as follow on imports array

```TS
@Component({
  selector: '...',
  templateUrl: '...',
  styleUrls: ['...'],
  standalone: true,
  imports: [AlertComponent, JustAlertComponent]
})
```

## For animation

```TS
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideAnimations() // Import this
    ],
}).
catch((err) => console.error(err));
```

## Using

After importing this library with `npm install ngx-alert-message`,

## just alert module

```
<ngx-just-alert [text]="text"></ngx-just-alert>
```

```
close : (required) value shoule be `true | false`

mode : (required) value shoule be `primary | success | danger | info | warning`

text : (required) value shoule be `anything...`

```

<img width="100%" src="https://raw.githubusercontent.com/manoj10101996/resources/main/ngx-alert-message-4.0.1.png"/>

---

## Alert module

```
<ngx-alert [text]="text"></ngx-alert>
```

```
close : (optional) value shoule be `true | false`

mode : (optional) value shoule be `primary | success | danger | info | warning`

text : (optional) value shoule be `anything...`

```

<img width="100%" src="https://raw.githubusercontent.com/manoj10101996/resources/main/ngx-alert-message-4.0.1.png"/>

---

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-alert-message-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-alert-message)

---
