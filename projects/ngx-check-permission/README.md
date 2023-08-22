<img width="256px" src="https://icon.beforepost.com/W3EL2XBA-LM79Z0DG-4Y17OWY8.svg"/>

# Permissions info

[![ngx-check-permission](https://img.shields.io/npm/dm/ngx-check-permission.svg)](https://npmjs.org/package/ngx-check-permission)
[![npm version](https://badge.fury.io/js/ngx-check-permission.svg)](https://badge.fury.io/js/ngx-check-permission)
[![](https://data.jsdelivr.com/v1/package/npm/ngx-check-permission/badge)](https://www.jsdelivr.com/package/npm/ngx-check-permission)
[![ngx-check-permission](https://snyk.io//advisor/npm-package/ngx-check-permission/badge.svg)](https://snyk.io//advisor/npm-package/ngx-check-permission)

Angular library which provides device permission status which are allowed for current device / system.

---

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-check-permission-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-check-permission)

---
## Import

Import the module on your `app.module.ts` file as follow.

> import { NgxCheckPermissionModule } from 'ngx-check-permission';

Then import the module as follow on imports array

> NgxCheckPermissionModule

 
### Using service

Import the servie to appropriate component / service file as follows.

```
import { NgxCheckPermissionService } from 'ngx-check-permission';
```

```
constructor( public permission: NgxCheckPermissionService ) {}
```

## Permissions

Getting all the permission status is async process use async function in order to receive the response

    async ngOnInit() {
        await this.checkPermissions();
    }

    public async checkPermissions() {
        await this.permission.getAllPermissions().then((permisssions) => {
    	    console.log(permisssions);
        });
    }

---

## Sample response

    [{
    	"permissionName": "geolocation",
    	"state": "prompt"
    }, {
    	"permissionName": "notifications",
    	"state": "prompt"
    }, {
    	"permissionName": "midi",
    	"state": "granted"
    }, {
    	"permissionName": "camera",
    	"state": "prompt"
    }, {
    	"permissionName": "microphone",
    	"state": "prompt"
    }, {
    	"permissionName": "background-fetch",
    	"state": "granted"
    }, {
    	"permissionName": "background-sync",
    	"state": "granted"
    }, {
    	"permissionName": "persistent-storage",
    	"state": "prompt"
    }, {
    	"permissionName": "accelerometer",
    	"state": "granted"
    }, {
    	"permissionName": "gyroscope",
    	"state": "granted"
    }, {
    	"permissionName": "magnetometer",
    	"state": "granted"
    }, {
    	"permissionName": "display-capture",
    	"state": "prompt"
    }]

Permission list:

'geolocation', 'notifications', 'push', 'midi', 'camera', 'microphone', 'speaker', 'device-info', 'background-fetch', 'background-sync', 'bluetooth', 'persistent-storage', 'ambient-light-sensor', 'accelerometer', 'gyroscope', 'magnetometer', 'clipboard', 'display-capture', 'nfc'

## Code integration

To use this package as a service `npm i ngx-check-permission` install this on the root angular project .

> Note: Don't forget to run this commend `npm i ngx-check-permission` on root folder or else it will throw error.

---

[<img src="https://github.com/manoj10101996/resources/blob/main/ngx-check-permission-advertise.png?raw=true" width="100%" >](https://www.beforepost.com/package/ngx/ngx-check-permission)

---
