import { NgModule } from '@angular/core';
import { NgxColorPaletteComponent } from './ngx-color-palette.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NgxColorPaletteComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    NgxColorPaletteComponent
  ]
})
export class NgxColorPaletteModule { }
