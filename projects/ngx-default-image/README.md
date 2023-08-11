<img width="256px" src="https://icon.beforepost.com/EYK7RBDV-3E93PTQN-LSO3EATX.svg"/>

# ngx-default-image (latest)

- Angular library which provides a way prevend image rendering when the image loading failed with custom replacement image.

- Get extracted meta info from the image.
 
## Preview with CodeSandbox

[Demo with CodeSandbox](https://codesandbox.io/s/wonderful-estrela-kp6gjx?file=/src/app/app.component.html)


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

> NgxDeviceInfoModule

### Author

Thanks in advance

[**Manojkumar Muthukumar**](https://codesandbox.io/u/manoj10101996)

Coimbatore

[![Visit beforepost.com for awesome color palettes & extract colors and text from any source](https://github.com/manoj10101996/resources/blob/main/npm-pack-beforepost.png?raw=true)](https://www.beforepost.com/)
