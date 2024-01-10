import { Component } from '@angular/core';
import { NgxLogsService } from 'projects/ngx-logs/src/public-api';

@Component({
    selector: 'app-ngx-logs',
    templateUrl: './ngx-logs.component.html',
    styleUrls: ['./ngx-logs.component.scss'],
    standalone: true
})
export class NgxLogsComponent {

  constructor(private ngxLogs: NgxLogsService) {
    this.ngxLogs.directory();
    this.ngxLogs.clear();
    this.ngxLogs.log('Log Message from NgxLogsService');
    this.ngxLogs.warn('Warning Message from NgxLogsService');
    this.ngxLogs.info('Info Message from NgxLogsService');
    this.ngxLogs.error('Error Message from NgxLogsService');
    this.ngxLogs.counter('Value');
    this.ngxLogs.table([1, 2, 3, 4, 5, 6, 7, 8, 9])
  }

}
