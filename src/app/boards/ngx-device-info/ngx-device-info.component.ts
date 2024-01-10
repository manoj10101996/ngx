import { Component } from '@angular/core';
import { NgxDeviceInfoService } from 'projects/ngx-device-info/src/public-api';

@Component({
    selector: 'app-ngx-device-info',
    templateUrl: './ngx-device-info.component.html',
    styleUrls: ['./ngx-device-info.component.scss'],
    standalone: true
})
export class NgxDeviceInfoComponent {

  public deviceInfo: any;
  constructor(public device: NgxDeviceInfoService) {
    this.device.getDeviceInfo().then((data) => {
      this.deviceInfo = data;
      console.log(this.deviceInfo)
    });
  }

}
