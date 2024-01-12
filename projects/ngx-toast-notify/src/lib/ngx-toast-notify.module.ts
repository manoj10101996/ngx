import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
}
