<img width="256px" src="https://icon.beforepost.com/1S97FDGY-HWPHWB61-5MT8XLUK.svg"/>

# Welcome to NGX-LOGS!


[![ngx-logs](https://img.shields.io/npm/dm/ngx-logs.svg)](https://npmjs.org/package/ngx-logs)
[![npm version](https://badge.fury.io/js/ngx-logs.svg)](https://badge.fury.io/js/ngx-logs)
[![](https://data.jsdelivr.com/v1/package/npm/ngx-logs/badge)](https://www.jsdelivr.com/package/npm/ngx-logs)
[![ngx-logs](https://snyk.io//advisor/npm-package/ngx-logs/badge.svg)](https://snyk.io//advisor/npm-package/ngx-logs)

 

Console input / output strings or any message strings at browser console.
The **`console.log()`** method outputs a message to the web console. The message may be a single string (with optional substitution values), or it may be any one or more JavaScript objects.

A Web console is a tool which is mainly used to log information associated with a web page like: network requests, JavaScript, security errors, warnings, CSS etc. It enables us to interact with a web page by executing JavaScript expression in the contents of the page.

---

 [<img src="https://github.com/manoj10101996/resources/blob/main/ngx-logs-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-logs)

---

## Import

Import the module on your `app.module.ts` file as follow.

```
import { NgxLogsModule } from "ngx-logs";
```

Then import the module as follow on imports array

```
NgxLogsModule
```

## Using

After importing this library with `npm install ngx-logs`, go to the component which is declared under `app.module.ts` and integrate as below.

## NGX LOGS MODULE

```
constructor(private ngxLogs: NgxLogsService) { }
```

---
 
 [<img src="https://github.com/manoj10101996/resources/blob/main/ngx-logs-poster.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-logs)

---

Use reference for logs service in constructor and import it respectively at any component

## Methods

This are the methods available with ngx-logs use it as per your requirement:

|              | Method                                                      | Usage                                                                                           |
| ------------ | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Directory    | `this.ngxLogs.directory();`                                 | Logs current page info with all require information's (URL, PATH etc.)                          |
| Clear        | `this.ngxLogs.clear();`                                     | Clears the entire console logs                                                                  |
| Log          | `this.ngxLogs.log('Log Message from NgxLogsService');`      | Logs standard custom strings as console logs                                                    |
| Warn         | `this.ngxLogs.warn('Warning Message from NgxLogsService');` | Logs Error message for custom strings as console logs                                           |
| Info         | `this.ngxLogs.info('Info Message from NgxLogsService')`     | Same as console logs                                                                            |
| Error        | `this.ngxLogs.error('Error Message from NgxLogsService');`  | Logs Error message for custom strings as console logs                                           |
| Counter      | `this.ngxLogs.counter('Value');`                            | Console logs for iterations with index value - Can be used with for , forin, foreach, do..while |
| Table / JSON | `this.ngxLogs.table(array)`                                 | Displays array or JSON of array/dictionary input as a table in console                          |


---

 [<img src="https://github.com/manoj10101996/resources/blob/main/ngx-logs-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-logs)

---
