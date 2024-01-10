import { Component } from '@angular/core';
import { NgxToastNotifyService } from 'projects/ngx-toast-notify/src/public-api';

@Component({
    selector: 'app-ngx-toast-notify',
    templateUrl: './ngx-toast-notify.component.html',
    styleUrls: ['./ngx-toast-notify.component.scss'],
    standalone: true
})
export class NgxToastNotifyComponent {

  constructor(private NgxToastNotifyService: NgxToastNotifyService) {}
  ngOnInit(): void {}

  showToastTopLeft() {
    this.NgxToastNotifyService.showToast("Top left", "primary", "top-left");
  }

  showToastTopRight() {
    this.NgxToastNotifyService.showToast("Top right", "warning", "top-right");
  }

  showToastBottomLeft() {
    this.NgxToastNotifyService.showToast("Bottom left", "info", "bottom-left");
  }

  showToastBottomRight() {
    this.NgxToastNotifyService.showToast(
      "bottom-right",
      "danger",
      "bottom-right"
    );
  }

  showToastTopCenter() {
    this.NgxToastNotifyService.showToast("top-center", "dark", "top-center");
  }

  showToastBottomCenter() {
    this.NgxToastNotifyService.showToast(
      "bottom-center",
      "light",
      "bottom-center"
    );
  }
}
