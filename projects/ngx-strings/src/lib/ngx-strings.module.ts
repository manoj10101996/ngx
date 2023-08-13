import { NgModule } from '@angular/core';
import { NgxStringsComponent } from './ngx-strings.component';


import { EmailcutDirective } from './directives/emailcut.directive';
import { InitialcaseDirective } from './directives/initialcase.directive';
import { LinelimitDirective } from './directives/linelimit.directive';
import { LowercaseDirective } from './directives/lowercase.directive';
import { ReplacerDirective } from './directives/replacer.directive';
import { StringcutDirective } from './directives/stringcut.directive';
import { TitlecaseDirective } from './directives/titlecase.directive';
import { UppercaseDirective } from './directives/uppercase.directive';

@NgModule({
  declarations: [
    NgxStringsComponent,
    UppercaseDirective,
    LowercaseDirective,
    TitlecaseDirective,
    InitialcaseDirective,
    LinelimitDirective,
    StringcutDirective,
    EmailcutDirective,
    ReplacerDirective
  ],
  imports: [
  ],
  exports: [
    NgxStringsComponent,
    UppercaseDirective,
    LowercaseDirective,
    TitlecaseDirective,
    InitialcaseDirective,
    LinelimitDirective,
    StringcutDirective,
    EmailcutDirective,
    ReplacerDirective
  ]
})
export class NgxStringsModule { }
