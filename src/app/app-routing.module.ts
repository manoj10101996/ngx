import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxAlertMessageComponent } from './boards/ngx-alert-message/ngx-alert-message.component';
import { NgxArrayComponent } from './boards/ngx-array/ngx-array.component';
import { NgxCheckPermissionComponent } from './boards/ngx-check-permission/ngx-check-permission.component';
import { NgxColorConverterComponent } from './boards/ngx-color-converter/ngx-color-converter.component';
import { NgxDefaultImageComponent } from './boards/ngx-default-image/ngx-default-image.component';
import { NgxDeviceInfoComponent } from './boards/ngx-device-info/ngx-device-info.component';
import { NgxLogsComponent } from './boards/ngx-logs/ngx-logs.component';
import { NgxRandomComponent } from './boards/ngx-random/ngx-random.component';
import { NgxResizeElementComponent } from './boards/ngx-resize-element/ngx-resize-element.component';
import { NgxSlightScrollComponent } from './boards/ngx-slight-scroll/ngx-slight-scroll.component';
import { NgxStringsComponent } from './boards/ngx-strings/ngx-strings.component';
import { NgxTagsInputBoxComponent } from './boards/ngx-tags-input-box/ngx-tags-input-box.component';
import { NgxToastNotifyComponent } from './boards/ngx-toast-notify/ngx-toast-notify.component';
import { NgxCursorHoverComponent } from './boards/ngx-cursor-hover/ngx-cursor-hover.component';

const routes: Routes = [
  { path: '', component: NgxDefaultImageComponent },
  { path: 'ngx-resize-element', component: NgxResizeElementComponent },
  { path: 'ngx-default-image', component: NgxDefaultImageComponent },
  { path: 'ngx-alert-message', component: NgxAlertMessageComponent },
  { path: 'ngx-array', component: NgxArrayComponent },
  { path: 'ngx-check-permission', component: NgxCheckPermissionComponent },
  { path: 'ngx-color-converter', component: NgxColorConverterComponent },
  { path: 'ngx-device-info', component: NgxDeviceInfoComponent },
  { path: 'ngx-logs', component: NgxLogsComponent },
  { path: 'ngx-random', component: NgxRandomComponent },
  { path: 'ngx-strings', component: NgxStringsComponent },
  { path: 'ngx-tags-input-box', component: NgxTagsInputBoxComponent },
  { path: 'ngx-toast-notify', component: NgxToastNotifyComponent },
  { path: 'ngx-slight-scroll', component: NgxSlightScrollComponent },
  { path: 'ngx-cursor-hover', component: NgxCursorHoverComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
