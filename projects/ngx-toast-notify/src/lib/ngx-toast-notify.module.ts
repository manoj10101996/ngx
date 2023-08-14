import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ngxToastNotifyConfig } from './ngx-toast-notify.service';

@NgModule({
  declarations: [],
  imports: [BrowserAnimationsModule],
  exports: [],
})
export class NgxToastNotifyModule {
  constructor(@Optional() @SkipSelf() parentModule?: NgxToastNotifyModule) {
    if (parentModule) {
      throw new Error(
        'NgxToastNotifyModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(
    config: ngxToastNotifyConfig
  ): ModuleWithProviders<NgxToastNotifyModule> {
    return {
      ngModule: NgxToastNotifyModule,
      providers: [{ provide: ngxToastNotifyConfig, useValue: config }],
    };
  }
}
