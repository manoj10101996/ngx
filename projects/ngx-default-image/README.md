<img width="256px" src="https://icon.beforepost.com/EYK7RBDV-3E93PTQN-LSO3EATX.svg"/>

# ngx-default-image (latest)

[![ngx-default-image](https://img.shields.io/npm/dm/ngx-default-image.svg)](https://npmjs.org/package/ngx-default-image)
[![npm version](https://badge.fury.io/js/ngx-default-image.svg)](https://badge.fury.io/js/ngx-default-image)
[![](https://data.jsdelivr.com/v1/package/npm/ngx-default-image/badge)](https://www.jsdelivr.com/package/npm/ngx-default-image)
[![ngx-default-image](https://snyk.io//advisor/npm-package/ngx-default-image/badge.svg)](https://snyk.io//advisor/npm-package/ngx-default-image)

- Angular library which provides a way prevend image rendering when the image loading failed with custom replacement image.

- Get extracted meta info from the image.

---

 [<img src="https://github.com/manoj10101996/resources/blob/main/ngx-default-image-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-default-image)

---

[<img width="100%" src="https://github.com/manoj10101996/resources/blob/main/ngx-default-image.png?raw=true
"/>](https://codesandbox.io/s/wonderful-estrela-kp6gjx?file=/src/app/app.component.html)

---

### Import


Import the module on your `app.module.ts` file as follow.

> import { NgxDefaultImageModule} from "ngx-default-image";


### Add to imports


```
imports: [
  ...
  NgxDefaultImageModule
  ...
],
```

### Using META interface


```
import { META } from "ngx-default-image";
```

### Core function


```
<img src="'https://dummyimage.com/600x400/fff/000'" 
[imageURL]="imageURL" NgxDefaultImage />
```

- imageURL : Replacement image URL (Usually from asset folder in any dimension).


### Using service  


Emit the function in order to get meta info as follows.

```
<img src="'https://dummyimage.com/600x400/fff/000'" 
[imageURL]="imageURL" (imageMetaInfo)="imageMetaInfo($event)" 
NgxDefaultImage />
```

```
import { META } from "ngx-default-image";
```

```
public imageMeta: META;
public imageURL = "https://cdn-icons-png.flaticon.com/128/1829/1829412.png"; // Fallback URL
```

```
public imageMetaInfo(event: META) {
  this.imageMeta = event;
  consoloe.log(this.imageMeta);
}
```
---

### For series of image under loop 


```
<div *ngFor="let img of images:let index = index;">
  <img src="'https://dummyimage.com/600x400/fff/000'" 
  [imageURL]="imageURL" 
  (imageMetaInfo)="imageMetaInfo($event, index)" 
  NgxDefaultImage />
</div>
```

```
public imageMetaInfo(event: META, index: number) {
  consoloe.log(`Meta info of image at ${index} is ${event}.`);
}
```

---

### Ability 

> The image will return the meta info as follows:
```
public imageMetaInfo(event: META) {
  this.imageMeta = event;
}
```

---

### Meta properties 


| Properties        | Data Type |
--------------------|-------------
| isValidImage      | Boolean   |
| aspectRatio       | string    |
| x       | number    |
| y       | number    |
| rwidth       | number    |
| rheight       | number    |
| renderTime       | string    |
| top       | number    |
| right       | number    |
| bottom       | number    |
| left       | number    |
| datedOn       | any    |
| width       | number    |
| height       | number    |
| src       | string    |
| esrc       | string    |
| alt       | string    |
| crossorigin       | string    |


### Code integration

To use this package as a service `npm i ngx-default-image` install this on the root angular project .

> Note: Don't forget to run this commend `npm i ngx-default-image` on root folder or else it will throw error.

Then import the module as follow on imports array

> NgxDefaultImageModule

---

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-default-image-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-default-image)
