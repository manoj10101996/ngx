<img width="256px" src="https://icon.beforepost.com/F3K9DD33-RH2MK3E5-RG0GS8AX.svg"/>

# Device detector / Device info / Permissions info

[![ngx-device-info](https://img.shields.io/npm/dm/ngx-device-info.svg)](https://npmjs.org/package/ngx-device-info)
[![npm version](https://badge.fury.io/js/ngx-device-info.svg)](https://badge.fury.io/js/ngx-device-info)
[![](https://data.jsdelivr.com/v1/package/npm/ngx-device-info/badge)](https://www.jsdelivr.com/package/npm/ngx-device-info)
[![ngx-device-info](https://snyk.io//advisor/npm-package/ngx-device-info/badge.svg)](https://snyk.io//advisor/npm-package/ngx-device-info)

- Angular library which provides device information / type / name and also it provides much more device independent features & informations.

- Get device information and more

---
[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-device-info-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-device-info)
---

## Import

Import the module on your `app.module.ts` file as follow.

> import { NgxDeviceInfoModule} from "ngx-device-info";

### Add to imports

```
imports: [
  ...
  NgxDeviceInfoModule
  ...
],
```
### Using service

Import the servie to appropriate component / service file as follows.

```
import { NgxDeviceInfoService } from 'ngx-device-info';

constructor(public device: NgxDeviceInfoService) {}
```

## Permissions

> Get the permission status for following api's - as boolean (true/false):

```
public deviceInfo: any;

constructor(public device: NgxDeviceInfoService) {
  this.device.getDeviceInfo().then((data) => {
    this.deviceInfo = data;
  });
}
 ```

### Methods

- Permission list:

```
'geolocation',
'notifications',
'push',
'midi',
'camera',
'microphone',
'speaker',
'device-info',
'background-fetch',
'background-sync',
'bluetooth',
'persistent-storage',
'ambient-light-sensor',
'accelerometer',
'gyroscope',
'magnetometer',
'clipboard',
'display-capture',
'nfc',
```
---

| Methods         | usage                                           |                                                                                                                      |
| --------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| getDeviceName() | returns device specific `name`                  |
| isDesktop()     | returns `true` if decice is desktop             |
| isMobile()      | returns `true` if decice is mobile              |
| isTablet()      | returns `true` if decice is tablet              |
| getDeviceType() | returns device type `mobile - tablet - desktop` |
| getDeviceInfo() | returns object of info                          |
|                 | deviceName                                      | returns device `name`                                                                                                |
|                 | deviceType                                      | returns device `type`                                                                                                |
|                 | userAgent                                       | returns `userAgent`                                                                                                  |
|                 | language                                        | returns device language                                                                                              |
|                 | isOnline                                        | returns whether internet is `on` - `off`                                                                             |
|                 | cookieEnabled                                   | checks is `cookieEnabled`                                                                                            |
|                 | vendor                                          | returns `vendor` info                                                                                                |
|                 | clientHeight                                    | Inner height of the HTML document body, including padding but not the horizontal scrollbar height, border, or margin |
|                 | height                                          | Device screen height (i.e. all physically visible stuff)                                                             |
|                 | availHeight                                     | Device screen height minus the operating system taskbar (if present)                                                 |
|                 | innerHeight                                     | The current document's viewport height, minus taskbars, etc.                                                         |
|                 | outerHeight                                     | Height the current window visibly takes up on screen                                                                 |
|                 | clientWidth                                     | Full width of the HTML page as coded, minus the vertical scroll bar                                                  |
|                 | width                                           | Device screen width (i.e. all physically visible stuff)                                                              |
|                 | availWidth                                      | Device screen width, minus the operating system taskbar (if present)                                                 |
|                 | innerWidth                                      | The browser viewport width (including vertical scroll bar, includes padding but not border or margin)                |
|                 | outerWidth                                      | The outer window width (including vertical scroll bar,                                                               |
|                 | href                                            | returns location - `href`                                                                                            |
|                 | protocol                                        | returns location - `protocol`                                                                                        |
|                 | host                                            | returns location - `host`                                                                                            |
|                 | hostname                                        | returns location - `hostname`                                                                                        |
|                 | pathname                                        | returns location - `pathname`                                                                                        |
|                 | search                                          | returns location - `search`                                                                                          |
|                 | hash                                            | returns location - `hash`                                                                                            |
|                 | origin                                          | returns location - `origin`                                                                                          |
|                 | timeZoneOffSet                                  | returns date- `timeZoneOffSet`                                                                                       |
|                 | utcString                                       | returns date- `utcString`                                                                                            |
|                 | time                                            | returns date- `time`                                                                                                 |
|                 | date                                            | returns date- `date`                                                                                                 |
|                 | day                                             | returns date- `day`                                                                                                  |
|                 | month                                           | returns date- `month`                                                                                                |
|                 | hour                                            | returns date- `hour`                                                                                                 |
|                 | year                                            | returns date- `year`                                                                                                 |
|                 | seconds                                         | returns date- `seconds`                                                                                              |
|                 | milliseconds                                    | returns date- `milliseconds`                                                                                         |
|                 | utcdate                                         | returns date- `utcdate`                                                                                              |
|                 | utcday                                          | returns date- `utcday`                                                                                               |
|                 | utcmonth                                        | returns date- `utcmonth`                                                                                             |
|                 | utcyear                                         | returns date- `utcyear`                                                                                              |

## Code integration

To use this package as a service `npm i ngx-device-info` install this on the root angular project .

> Note: Don't forget to run this commend `npm i ngx-device-info` on root folder or else it will throw error.

Then import the module as follow on imports array

> NgxDeviceInfoModule

---
[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-device-info-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-device-info)
---
