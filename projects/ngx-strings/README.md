<img src="https://icon.beforepost.com/LG8MMQ4V-O3IBIAKV-5J0WBZV2.svg" width="256px" title="String" alt="string">

# Welcome to ngx-strings


[![ngx-strings](https://img.shields.io/npm/dm/ngx-strings.svg)](https://npmjs.org/package/ngx-strings)
[![npm version](https://badge.fury.io/js/ngx-strings.svg)](https://badge.fury.io/js/ngx-strings)
[![](https://data.jsdelivr.com/v1/package/npm/ngx-strings/badge)](https://www.jsdelivr.com/package/npm/ngx-strings)
[![ngx-strings](https://snyk.io//advisor/npm-package/ngx-strings/badge.svg)](https://snyk.io//advisor/npm-package/ngx-strings)


# String / Email operations.

String operations for angular projects

---
[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-strings-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-strings)
---

 ## Import

Import the module on your `app.module.ts` file as follow.

```TS
import { NgxStringsModule } from "ngx-strings";
```
Then import the module as follow on imports array

```TS
NgxStringsModule
```

## Using

After importing this library with `npm install ngx-strings`, go to the component which is declared under `app.module.ts` and integrate as below. use it on any component or else declare it on `app.component.ts` for enabling it global to application.

## Integrations module

### Email slicer

| Directive      | Usage                                                                       |
| -------------- | --------------------------------------------------------------------------- |
| ngxEmailSlicer | Slicing / protecting the email string to user view. `(Validation included)` |
| Attributes     | `invalid` as string for custom error message                                |

```HTML
<span ngxEmailSlicer>
  manoj10101996gmail.com
</span> <br>
<span ngxEmailSlicer>
  violinhi@yahoo.com
</span> <br>
<span ngxEmailSlicer>
  staikos@optonline.net
</span> <br>
<span invalid="Error occured" ngxEmailSlicer>
  staikosoptonline.net
</span>
<br>
<span invalid="Error occured" ngxEmailSlicer>
  staik@osoptonlinenet
</span>
```

### String lines limitation `for all browsers - Responsive`

| Directive    | Usage                                                     |
| ------------ | --------------------------------------------------------- |
| ngxLineLimit | Limiting the lines for user view. (ellipsis) `Responsive` |
| Attributes   | `lines` as number                                         |

```HTML
<span lines="1" ngxLineLimit>
  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
  sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</span>
```

### String / Character replacer

| Directive         | Usage                                                                |
| ----------------- | -------------------------------------------------------------------- |
| ngxStringReplacer | Replacing the existing words with new words. (ellipsis) `Responsive` |
| Attributes        | `from` as string `to` as string                                      |

```HTML
<span from="quis" to="HELLO" ngxStringReplacer>
  lorem quis dolor sit amet, consectetur quis elit, sed do quis tempor incididunt ut quis et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea quis consequat.
  Duis aute quis dolor in reprehenderit in voluptate velit quis cillum dolore eu fugiat nulla pariatur. Excepteur
  sint occaecat quis quis proident, quis in culpa qui quis deserunt mollit anim id est laborum.
</span>
```

### String slicer - limiting the charaters

| Directive       | Usage                                                                            |
| --------------- | -------------------------------------------------------------------------------- |
| ngxStringSlicer | Slicing / Limiting the string using character count. (ellipsis) `Non-Responsive` |
| Attributes      | `start` as number `end` as number `overflow` as boolean (ellipsis) ...           |

```HTML
<span [start]="0" [end]="10" [overflow]="true" ngxStringSlicer>
  lorem ipsum dolor sit amet, consectetur adipiscing el
</span>
```

### String case - Changing the case

| Directive      | Usage                                                           |
| -------------- | --------------------------------------------------------------- |
| ngxInitialCase | `Default` string / paragraph.                                   |
| ngxTitleCase   | Change the `first` character to uppercase on string / paragraph |
| ngxUpperCase   | Changing the entire string / paragraph to `uppercase`           |
| ngxLowerCase   | Changing the entire string / paragraph to `lowercase`           |

```HTML
<span ngxInitialCase>
  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
</span>
<h3>Titlecase</h3>
<span ngxTitleCase>
  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
</span>
<h3>Uppercase</h3>
<span ngxUpperCase>
  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
</span>
<h3>Lowercase</h3>
<span ngxLowerCase>
  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
</span>
```

---
[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-strings-poster.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-strings)
---


---
[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-strings-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-strings)
---
