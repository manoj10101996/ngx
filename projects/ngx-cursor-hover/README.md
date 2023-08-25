<img width="256px" alt="ngx-cursor-hover" src="https://raw.githubusercontent.com/manoj10101996/resources/5d05c67fd08ed980e80f3c95363caf5fbdd75a7f/ngx-cursor-hover.svg"/>

# ngx-cursor-hover (latest)

[![ngx-cursor-hover](https://img.shields.io/npm/dm/ngx-cursor-hover.svg)](https://npmjs.org/package/ngx-cursor-hover)
[![npm version](https://badge.fury.io/js/ngx-cursor-hover.svg)](https://badge.fury.io/js/ngx-cursor-hover)  
[![](https://data.jsdelivr.com/v1/package/npm/ngx-cursor-hover/badge)](https://www.jsdelivr.com/package/npm/ngx-cursor-hover)

The CSS cursor property specifies the mouse cursor to be displayed when pointing over an element. It can be used to change the cursor to a variety of different shapes, such as a hand, a crosshair, or an arrow. 

The cursor property is used to improve the user experience by providing visual cues about the actions that can be performed on an element. For example, a hand cursor is typically used to indicate that an element can be clicked, while a crosshair cursor is typically used to indicate that an element can be resized.




[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-cursor-hover-poster.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-cursor-hover)


- `ngxCursor` Add directive to any HTML block element in order to enable cursor.

# Import Style

- [x] Import using CSS CDN and Add it to your application

```HTML
<link rel="stylesheet" href="https://cdn.beforepost.com/neptune/ngx-cursor-hover-minified.css">
```

Add `crossorigin` attribute as (use-credentials or anonymous) to link element if required.

- [x] Directly add it to your Css / Scss file.

```CSS
@import url("https://cdn.beforepost.com/neptune/ngx-cursor-hover-minified.css");
```

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-cursor-hover-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-cursor-hover)

---

### Import

Import the module on your `app.module.ts` file as follow.

> import { NgxCursorHoverModule} from "ngx-cursor-hover";

### Add to imports

```
imports: [
  ...
  NgxCursorHoverModule
  ...
],
```

### Core function

```
<div class="card-body" ngxCursor
  [cursor]="'cursor-name-from-below-table'">

    <!-- Content goes here... -->

</div>
```

| Name             | Category             | class                                |
| ---------------- | -------------------- | ------------------------------------ |
| alias            | drag-and-drop        | .ngx-cursor-pointer-alias            |
| all-scroll       | resize-and-scrolling | .ngx-cursor-pointer-all-scroll       |
| auto             | general              | .ngx-cursor-pointer-auto             |
| cell             | selection            | .ngx-cursor-pointer-cell             |
| col-resize       | resize-and-scrolling | .ngx-cursor-pointer-col-resize       |
| context-menu     | links-and-status     | .ngx-cursor-pointer-context-menu     |
| copy             | drag-and-drop        | .ngx-cursor-pointer-copy             |
| crosshair        | selection            | .ngx-cursor-pointer-crosshair        |
| default          | general              | .ngx-cursor-pointer-default          |
| e-resize         | resize-and-scrolling | .ngx-cursor-pointer-e-resize         |
| ew-resize        | resize-and-scrolling | .ngx-cursor-pointer-ew-resize        |
| grab             | grab                 | .ngx-cursor-pointer-grab             |
| grabbing         | grab                 | .ngx-cursor-pointer-grabbing         |
| help             | links-and-status     | .ngx-cursor-pointer-help             |
| inherit          | general              | .ngx-cursor-pointer-inherit          |
| initial          | general              | .ngx-cursor-pointer-initial          |
| move             | drag-and-drop        | .ngx-cursor-pointer-move             |
| n-resize         | resize-and-scrolling | .ngx-cursor-pointer-n-resize         |
| ne-resize        | resize-and-scrolling | .ngx-cursor-pointer-ne-resize        |
| nesw-resize      | resize-and-scrolling | .ngx-cursor-pointer-nesw-resize      |
| no-drop          | drag-and-drop        | .ngx-cursor-pointer-no-drop          |
| none             | general              | .ngx-cursor-pointer-none             |
| not-allowed      | drag-and-drop        | .ngx-cursor-pointer-not-allowed      |
| ns-resize        | resize-and-scrolling | .ngx-cursor-pointer-ns-resize        |
| nw-resize        | resize-and-scrolling | .ngx-cursor-pointer-nw-resize        |
| nwse-resize      | resize-and-scrolling | .ngx-cursor-pointer-nwse-resize      |
| pointer          | links-and-status     | .ngx-cursor-pointer-pointer          |
| progress         | links-and-status     | .ngx-cursor-pointer-progress         |
| row-resize       | resize-and-scrolling | .ngx-cursor-pointer-row-resize       |
| s-resize         | resize-and-scrolling | .ngx-cursor-pointer-s-resize         |
| se-resize        | resize-and-scrolling | .ngx-cursor-pointer-se-resize        |
| sw-resize        | resize-and-scrolling | .ngx-cursor-pointer-sw-resize        |
| text             | selection            | .ngx-cursor-pointer-text             |
| unset            | general              | .ngx-cursor-pointer-unset            |
| vertical-text    | selection            | .ngx-cursor-pointer-vertical-text    |
| w-resize         | resize-and-scrolling | .ngx-cursor-pointer-w-resize         |
| wait             | links-and-status     | .ngx-cursor-pointer-wait             |
| zoom-in          | zoom                 | .ngx-cursor-pointer-zoom-in          |
| zoom-out         | zoom                 | .ngx-cursor-pointer-zoom-out         |
| -webkit-grab     | grab                 | .ngx-cursor-pointer--webkit-grab     |
| -webkit-grabbing | grab                 | .ngx-cursor-pointer--webkit-grabbing |
| -webkit-zoom-in  | zoom                 | .ngx-cursor-pointer--webkit-zoom-in  |
| -webkit-zoom-out | zoom                 | .ngx-cursor-pointer--webkit-zoom-out |

---

### Code integration

To use this package as a service `npm i ngx-cursor-hover` install this on the root angular project .

> Note: Don't forget to run this commend `npm i ngx-cursor-hover` on root folder or else it will throw error.

Then import the module as follow on imports array

> NgxResizeElementModule

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-cursor-hover-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-cursor-hover)
