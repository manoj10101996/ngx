import { NgModule } from '@angular/core';
import { NgxTagsComponent } from './ngx-tags/ngx-tags.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NgxTagsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxTagsComponent
  ]
})
export class NgxTagsModule { }
