import { NgModule } from '@angular/core';
import { NgxResizeElementComponent } from './ngx-resize-element.component';
import { NgxResizeElementDirective } from './ngx-resize-element.directive';



@NgModule({
  declarations: [
    NgxResizeElementComponent,
      NgxResizeElementDirective
   ],
  imports: [
  ],
  exports: [
    NgxResizeElementComponent,
    NgxResizeElementDirective
  ]
})
export class NgxResizeElementModule { }
