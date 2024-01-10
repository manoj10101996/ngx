import { Component } from '@angular/core';
import { NgxResizeElementDirective } from '../../../../projects/ngx-resize-element/src/lib/ngx-resize-element.directive';

@Component({
    selector: 'app-ngx-resize-element',
    templateUrl: './ngx-resize-element.component.html',
    styleUrls: ['./ngx-resize-element.component.scss'],
    standalone: true,
    imports: [NgxResizeElementDirective]
})
export class NgxResizeElementComponent {

}
