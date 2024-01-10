import { Component } from '@angular/core';
import { AlertComponent } from '../../../../projects/ngx-alert-message/src/lib/alert/alert.component';
import { JustAlertComponent } from '../../../../projects/ngx-alert-message/src/lib/just-alert/just-alert.component';

@Component({
    selector: 'app-ngx-alert-message',
    templateUrl: './ngx-alert-message.component.html',
    styleUrls: ['./ngx-alert-message.component.scss'],
    standalone: true,
    imports: [JustAlertComponent, AlertComponent]
})
export class NgxAlertMessageComponent {

}
