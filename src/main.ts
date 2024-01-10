import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { NgxToastNotifyModule } from 'projects/ngx-toast-notify/src/public-api';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';


bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, AppRoutingModule, NgxToastNotifyModule.forRoot({
            toastTimeoutInSeconds: 10,
            animationDelayInMilliSeconds: 500,
            enableClosebutton: true,
            position: 'top-right',
            backgroundColor: '',
            textColor: '',
        }))]
})
  .catch(err => console.error(err));
