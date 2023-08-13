import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgxCheckPermissionService {
  constructor() { }
  private permissionsNames = [
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
  ];

  public async getAllPermissions() {
    const allPermissions: any = [];
    // We use Promise.all to wait until all the permission queries are resolved
    await Promise.all(
      this.permissionsNames.map(async (permissionName: any) => {
        try {
          let permission;
          switch (permissionName) {
            case 'push':
              // Not necessary but right now Chrome only supports push messages with  notifications
              permission = await navigator.permissions.query({
                name: permissionName,
              });
              break;
            default:
              permission = await navigator.permissions.query({
                name: permissionName,
              });
          }
          allPermissions.push({ permissionName, state: permission.state });
        } catch (e: any) {
          allPermissions.push({
            permissionName,
            state: 'error',
            errorMessage: e.toString(),
          });
        }
      })
    );
    return allPermissions;
  }
}
