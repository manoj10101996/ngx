<img width="256px" src="https://icon.beforepost.com/I0H3FAPV-KSRZF8JQ-6S9AGVHY.svg"/>

# Welcome to NGX-TAGS-INPUT-BOX!

[![](https://data.jsdelivr.com/v1/package/npm/ngx-tags-input-box/badge)](https://www.jsdelivr.com/package/npm/ngx-tags-input-box)

Tags input component for angular projects (Also supports angular upto date)
Creative tags input with multiple color variance and limitable tag range.

> Ability to pass default values on tags initialization and add custom themes with css.

---

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-tags-input-box-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-tags-input-box)

---

## Import

Import the module on your `app.module.ts` file as follow.

```TS
import { NgxTagsModule} from "ngx-tags-input-box";
```

Then import the module as follow on imports array

```TS
NgxTagsModule
```

Add this into your .html file of your component

```HTML
<ngx-tags-input [limit]="limit" [header]="'Add tags related to post -success'" [placeholder]="placeholder"
> [mode]="'success'" (tagsChange)="displayTags($event)"></ngx-tags-input>
```

Add this into to your .ts file of your component

```TS
public displayTags(event) { // Your code goes here }
```
## Custom css

```CSS
.ngx-tags-custom-css { // Your styles go here }
```

Add css for above css _class_ in order to modify the input.

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-tags-input-box-poster.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-tags-input-box)
  
## Using

After importing this library with `npm install ngx-tags-input-box`, go to the component which is declared under `app.module.ts` and integrate as below.

## Inputs & Variants

This are the methods available with ngx-tags-input-box use it as per your requirement:
 
```HTML
<ngx-tags-input [limit]="limit" [header]="header" [tags]="tags" [placeholder]="placeholder" [mode]="mode" (tagsChange)="displayTags($event)"></ngx-tags-input>`
```

```
mode : (required) value should be `primary | success | danger | info | warning`

limit : (required) value should be `0 - n` (default 25)

placeholder : (required) value should be `any text...`

header : (optional) value should be `any text...`

tags : (optional) tags [1,2,3,4,5,6] array in order to pass value.
``` 

## Code integration

To use this package as a service `npm i ngx-tags-input-box` install this on the root angular project .

> Note: Don't forget to run this commend `npm i ngx-tags-input-box` on root folder or else it will throw error.

---

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-tags-input-box-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-tags-input-box)

---
