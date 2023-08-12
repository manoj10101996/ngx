import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDefaultImageModule } from 'projects/ngx-default-image/src/public-api';
import { NgxDefaultImageComponent } from './boards/ngx-default-image/ngx-default-image.component';
import { NgxResizeElementComponent } from './boards/ngx-resize-element/ngx-resize-element.component';
import { NgxResizeElementModule } from 'projects/ngx-resize-element/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    NgxDefaultImageComponent,
    NgxResizeElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDefaultImageModule,
    NgxResizeElementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
