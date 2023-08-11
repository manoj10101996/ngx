import { NgModule } from '@angular/core';
import { NgxDefaultImageComponent } from './ngx-default-image.component';
import { NgxDefaultImageDirective } from './ngx-default-image.directive';



@NgModule({
  declarations: [
    NgxDefaultImageComponent,
    NgxDefaultImageDirective
  ],
  imports: [
  ],
  exports: [
    NgxDefaultImageComponent,
    NgxDefaultImageDirective
  ]
})
export class NgxDefaultImageModule { }
