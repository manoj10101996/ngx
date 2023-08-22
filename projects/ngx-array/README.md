<img width="256px" src="https://icon.beforepost.com/VYJ57IDB-D5QBG9K9-CXN7I5MX.svg"/>

# Welcome to ngx-array!

[![ngx-array](https://img.shields.io/npm/dm/ngx-array.svg)](https://npmjs.org/package/ngx-array)
[![npm version](https://badge.fury.io/js/ngx-array.svg)](https://badge.fury.io/js/ngx-array)
[![](https://data.jsdelivr.com/v1/package/npm/ngx-array/badge)](https://www.jsdelivr.com/package/npm/ngx-array)
[![ngx-array](https://snyk.io//advisor/npm-package/ngx-array/badge.svg)](https://snyk.io//advisor/npm-package/ngx-array)


Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.

Features: **Handled exceptions** which generally occurs while developing a array based functionalities
  
---

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-array-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-array)

---
[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-array-poster.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-array)
---

## Import

Import the module on your `app.module.ts` file as follow.

```
import { NgxArrayModule} from "ngx-array";
```
 
Then import the module as follow on imports array

```
NgxArrayModule
```
 
## Using

After importing this library with `npm install ngx-array`, go to the component which is declared under `app.module.ts` and integrate as below.

## NGX LOGS MODULE

```
constructor(private _ngArray: NgxArrayService) { }
```
 
Use reference for NgxArrayService in constructor and import it respectively at any component

## Methods

This are the methods available with ngx-array use it as per your requirement:

-  `_min(arr: Array<any>);` - Returns the minimum value in the array.
      **arr**: Array of values of any type[].

-  `_max(arr: Array<any>);` - Returns the maximum value in the array
      **arr**: Array of values of any type[].

-  `_sortNumbers(arr: Array<any>, mode: number = 1);`

  - Method sorts the elements of an numbers array in place and returns the sorted array.
    **arr**: Array of values of any type[].  
    **mode**: 1 for ascending , -1 for descending - Default 1 - `optional`

-  `_sort(arr: Array<any>)` - Method sorts the elements of an array in place and returns the sorted array.
      **arr**: Array of values of any type[].

-  `_reverse(arr: Array<any>)` - Returns the reverse ordered array.
      **arr**: Array of values of any type[].

-  `_join(arr: Array<any>, joinBy: string = "")` - New string by concatenating all of the elements in an array.
      **arr**: Array of values of any type[].  
       **joinBy**: Concatenate by the string example = (-).

-  `_indexOfFrom(arr: Array<any>, item: any, start: number)` - Returns the index of item from given array from starting at particular index.
      **arr**: Array of values of any type[].  
       **item**: Searchable item in array of any type
      **start**: Starting index

-  `_indexOf(arr: Array<any>, item: any)` - Returns the index of item from given array.
      **arr**: Array of values of any type[].  
       **item**: Searchable item in array of any type

-  `_hasAt(arr: Array<any>, item: any, positionIndex: number)` - Checks whether the array contains the item at particular given index.
      **arr**: Array of values of any type[].  
       **item**: Searchable item in array of any type
      **positionIndex**: Starting index

-  `_has(arr: Array<any>, item: any)` - Checks whether the array contains the item.
      **arr**: Array of values of any type[].  
       **item**: Searchable item in array of any type

-  `_filterNumbersArray(arr: Array<number>, condition, expected: number)` - Filters integer array for an given condition.
      **arr**: Array of values of any type[].  
       **condition**: Possible conditions ('>' , '<' , '>=', '<=' , '!==')
      **expected**: Resulted value should be in

-  `_fill( arr: Array<any>, value: any, from: number, to: number )` - method shallow copies part of an array to another location in the same array and returns it.
      **arr**: Array of values of any type[].  
       **value**: value to be filled in array
      **from**: Start from this position
      **to**: End at this position

-  `_copyWithin(arr: Array<any>, from: number, to: number)` - Method shallow copies part of an array to another location in the same array and returns it.
      **arr**: Array of values of any type[].  
       **from**: Start from this position
      **to**: End at this position

*  `_concat(...args: Array<any>)` - Method is used to merge two or more arrays.
      **args**: Multiple Array of values at any length

*  `_length(arr: Array<any>)` - Returns the length of the given array
      **args**: Multiple Array of values at any length

*  `_copy(arr: Array<any>)` - Duplicates an array
      **arr**: Array of values of any type[].

*  `_slice( arr: Array<any>, start: number, end: number = arr.length - 1 )` - returns a shallow copy of a portion of an array into a new array object selected from start to end.
      **arr**: Array of values of any type[].  
       **start**: Start from this position
      **end**: End at this position

*  `_splice( arr: Array<any>, start: number, end: number = arr.length - 1 )` - Cut of / Splice of an items at particular valid index
      **arr**: Array of values of any type[].  
       **start**: Start from this position
      **end**: End at this position

*  `_shift(arr: Array<any>)` - Method remove first element at the beginning of an array and returns the new length of the array.
      **arr**: Array of values of any type[].

*  `_unshift(arr: Array<any>)` - Method adds one or more elements to the beginning of an array and returns the new length of the array.
      **arr**: Array of values of any type[].

*  `_pop(arr: Array<any>)` - It will remove the array item at end & return item
      **arr**: Array of values of any type[].

*  `_push(arr: Array<any>, item: any)` - It will add / push new item to the array at end & return new array
      **arr**: Array of values of any type[].
      **item**: item to be pushed of any type
 
## Code integration

To use this package as a service `npm i ngx-array` install this on the root angular project .

> Note: Don't forget to run this commend `npm i ngx-array` on root folder or else it will throw error.

---

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-array-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-array)

---
