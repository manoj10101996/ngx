import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxDefaultImageComponent } from './boards/ngx-default-image/ngx-default-image.component';
import { NgxResizeElementComponent } from './boards/ngx-resize-element/ngx-resize-element.component';
import { NgxAlertMessageComponent } from './boards/ngx-alert-message/ngx-alert-message.component';

const routes: Routes = [
  { path: '', component: NgxDefaultImageComponent },
  { path: 'ngx-resize-element', component: NgxResizeElementComponent },
  { path: 'ngx-default-image', component: NgxDefaultImageComponent },
  { path: 'ngx-alert-message', component: NgxAlertMessageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
