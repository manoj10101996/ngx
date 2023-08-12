import { NgModule } from '@angular/core';
import { NgxAlertMessageComponent } from './ngx-alert-message.component';
import { AlertComponent, JustAlertComponent } from '../public-api';



@NgModule({
  declarations: [NgxAlertMessageComponent, AlertComponent, JustAlertComponent],
  imports: [],
  exports: [NgxAlertMessageComponent, AlertComponent, JustAlertComponent],
})
export class NgxAlertMessageModule { }
