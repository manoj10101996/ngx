import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDefaultImageModule } from 'projects/ngx-default-image/src/public-api';
import { NgxDefaultImageComponent } from './boards/ngx-default-image/ngx-default-image.component';
import { NgxResizeElementComponent } from './boards/ngx-resize-element/ngx-resize-element.component';
import { NgxResizeElementModule } from 'projects/ngx-resize-element/src/public-api';
import { NgxAlertMessageComponent } from './boards/ngx-alert-message/ngx-alert-message.component';
import { NgxAlertMessageModule } from 'projects/ngx-alert-message/src/public-api';
import { NgxArrayModule } from 'projects/ngx-array/src/public-api';
import { NgxCheckPermissionComponent } from './boards/ngx-check-permission/ngx-check-permission.component';
import { NgxCheckPermissionModule } from 'projects/ngx-check-permission/src/public-api';
import { NgxColorConverterComponent } from './boards/ngx-color-converter/ngx-color-converter.component';
import { NgxColorConverterModule } from 'projects/ngx-color-converter/src/public-api';
import { NgxDeviceInfoComponent } from './boards/ngx-device-info/ngx-device-info.component';
import { NgxDeviceInfoModule } from 'projects/ngx-device-info/src/public-api';
import { NgxLogsComponent } from './boards/ngx-logs/ngx-logs.component';
import { NgxLogsModule } from 'projects/ngx-logs/src/public-api';
import { NgxRandomComponent } from './boards/ngx-random/ngx-random.component';
import { NgxStringsComponent } from './boards/ngx-strings/ngx-strings.component';
import { NgxStringsModule } from 'projects/ngx-strings/src/public-api';
import { NgxTagsInputBoxComponent } from './boards/ngx-tags-input-box/ngx-tags-input-box.component';
import { NgxTagsModule } from 'projects/ngx-tags-input-box/src/public-api';
import { NgxToastNotifyComponent } from './boards/ngx-toast-notify/ngx-toast-notify.component';
import { NgxToastNotifyModule } from 'projects/ngx-toast-notify/src/public-api';
import { NgxSlightScrollComponent } from './boards/ngx-slight-scroll/ngx-slight-scroll.component';
import { NgxSlightScrollModule } from 'projects/ngx-slight-scroll/src/public-api';
import { NgxCursorHoverComponent } from './boards/ngx-cursor-hover/ngx-cursor-hover.component';
import { NgxCursorHoverModule } from 'projects/ngx-cursor-hover/src/public-api';
import { NgxColorPaletteComponent } from './boards/ngx-color-palette/ngx-color-palette.component';
import { NgxColorPaletteModule } from 'projects/ngx-color-palette/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    NgxDefaultImageComponent,
    NgxResizeElementComponent,
    NgxAlertMessageComponent,
    NgxCheckPermissionComponent,
    NgxColorConverterComponent,
    NgxDeviceInfoComponent,
    NgxLogsComponent,
    NgxRandomComponent,
    NgxStringsComponent,
    NgxTagsInputBoxComponent,
    NgxToastNotifyComponent,
    NgxSlightScrollComponent,
    NgxCursorHoverComponent,
    NgxColorPaletteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDefaultImageModule,
    NgxResizeElementModule,
    NgxAlertMessageModule,
    NgxArrayModule,
    NgxCheckPermissionModule,
    NgxColorConverterModule,
    NgxDeviceInfoModule,
    NgxLogsModule,
    NgxSlightScrollModule,
    NgxCursorHoverModule,
    NgxColorPaletteModule,
    NgxStringsModule,
    NgxToastNotifyModule.forRoot({
      toastTimeoutInSeconds: 10,
      animationDelayInMilliSeconds: 500,
      enableClosebutton: true,
      position: 'top-right',
      backgroundColor: '',
      textColor: '',
    }),
    NgxTagsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
