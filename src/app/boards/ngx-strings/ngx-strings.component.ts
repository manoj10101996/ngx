import { Component } from '@angular/core';
import { LowercaseDirective } from '../../../../projects/ngx-strings/src/lib/directives/lowercase.directive';
import { UppercaseDirective } from '../../../../projects/ngx-strings/src/lib/directives/uppercase.directive';
import { TitlecaseDirective } from '../../../../projects/ngx-strings/src/lib/directives/titlecase.directive';
import { InitialcaseDirective } from '../../../../projects/ngx-strings/src/lib/directives/initialcase.directive';
import { StringcutDirective } from '../../../../projects/ngx-strings/src/lib/directives/stringcut.directive';
import { ReplacerDirective } from '../../../../projects/ngx-strings/src/lib/directives/replacer.directive';
import { LinelimitDirective } from '../../../../projects/ngx-strings/src/lib/directives/linelimit.directive';
import { EmailcutDirective } from '../../../../projects/ngx-strings/src/lib/directives/emailcut.directive';

@Component({
    selector: 'app-ngx-strings',
    templateUrl: './ngx-strings.component.html',
    styleUrls: ['./ngx-strings.component.scss'],
    standalone: true,
    imports: [EmailcutDirective, LinelimitDirective, ReplacerDirective, StringcutDirective, InitialcaseDirective, TitlecaseDirective, UppercaseDirective, LowercaseDirective]
})
export class NgxStringsComponent {

}
