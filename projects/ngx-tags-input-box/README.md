<img width="256px" src="https://icon.beforepost.com/I0H3FAPV-KSRZF8JQ-6S9AGVHY.svg"/>

# Welcome to NGX-TAGS-INPUT-BOX!

## For Angular 17 + (standalone component)

[![ngx-tags-input-box](https://img.shields.io/npm/dm/ngx-tags-input-box.svg)](https://npmjs.org/package/ngx-tags-input-box)
[![npm version](https://badge.fury.io/js/ngx-tags-input-box.svg)](https://badge.fury.io/js/ngx-tags-input-box)
[![](https://data.jsdelivr.com/v1/package/npm/ngx-tags-input-box/badge)](https://www.jsdelivr.com/package/npm/ngx-tags-input-box)
[![ngx-tags-input-box](https://snyk.io//advisor/npm-package/ngx-tags-input-box/badge.svg)](https://snyk.io//advisor/npm-package/ngx-tags-input-box)

Tags input component for angular projects (Also supports angular upto date)
Creative tags input with multiple color variance and limitable tag range.

> Ability to pass default values on tags initialization and add custom themes with css.

---

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-tags-input-box-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-tags-input-box)

---

## Import

Import the module on your `your-component.component.ts` file as follow.

`import { NgxTagsComponent } from 'ngx-tags-input-box';`

Then import the module as follow on imports array

```TS
@Component({
  selector: '...',
  templateUrl: '...',
  styleUrls: ['...'],
  standalone: true,
  imports: [NgxTagsComponent]
})
```

Add this into your .html file of your component

```HTML
<div>
  <ngx-tags-input [limit]="10" [placeholder]="'Add Tags...'" [mode]="'success'" [tags]="tags" [rounded]="rounded"
    [disabled]="disabled" (tagsChange)="displayTags($event)"></ngx-tags-input>
</div>
<div>
  <ngx-tags-input [limit]="10" [placeholder]="'Add Tags...'" [mode]="'primary'" [tags]="tags" [rounded]="rounded"
    [disabled]="disabled" (tagsChange)="displayTags($event)"></ngx-tags-input>
</div>
<div>
  <ngx-tags-input [limit]="10" [placeholder]="'Add Tags...'" [mode]="'info'" [tags]="tags" [rounded]="rounded"
    [disabled]="disabled" (tagsChange)="displayTags($event)"></ngx-tags-input>
</div>
<div>
  <ngx-tags-input [limit]="10" [placeholder]="'Add Tags...'" [mode]="'warning'" [tags]="tags" [rounded]="rounded"
    [disabled]="disabled" (tagsChange)="displayTags($event)"></ngx-tags-input>
</div>
<div>
  <ngx-tags-input [limit]="10" [placeholder]="'Add Tags...'" [mode]="'danger'" [tags]="tags" [rounded]="rounded"
    [disabled]="disabled" (tagsChange)="displayTags($event)"></ngx-tags-input>
</div>
<div>
  <ngx-tags-input [limit]="10" [placeholder]="'Add Tags...'" [mode]="'light'" [tags]="tags" [rounded]="rounded"
    [disabled]="disabled" (tagsChange)="displayTags($event)"></ngx-tags-input>
</div>
```

Add this into to your .ts file of your component

```TS
public tags: any[] = ['welcome', 'to', 'ngx-tags-input']; // Bind Custom Input

public displayTags(event) { // Your code goes here }
```

## Custom css

```CSS
.ngx-tags-custom-css { // Your styles go here }
```

Add css for above css _class_ in order to modify the input.

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-tags-input-box-poster.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-tags-input-box)

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-tags-input-box-poster-round.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-tags-input-box)

## Inputs & Variants

This are the methods available with ngx-tags-input-box use it as per your requirement:

- mode : (required) value should be `primary | success | danger | info | warning | light`

- limit : (required) value should be `0 - n` (default 25)

- placeholder : (required) value should be `any text...`

- header : (optional) value should be `any text...`

- tags : (optional) tags [1,2,3,4,5,6] array in order to pass value.

- rounded: true (or) false

- disabled: true (or) false

## Code integration

To use this package as a service `npm i ngx-tags-input-box` install this on the root angular project .

## Using

After importing this library with `npm install ngx-tags-input-box`, go to the component which is declared under `app.module.ts` and integrate as below.

> Note: Don't forget to run this commend `npm i ngx-tags-input-box` on root folder or else it will throw error.

---

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-tags-input-box-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-tags-input-box)

---
