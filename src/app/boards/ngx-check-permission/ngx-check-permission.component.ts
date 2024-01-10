import { Component, OnInit } from '@angular/core';
import { NgxCheckPermissionService } from 'projects/ngx-check-permission/src/public-api';

@Component({
    selector: 'app-ngx-check-permission',
    templateUrl: './ngx-check-permission.component.html',
    styleUrls: ['./ngx-check-permission.component.scss'],
    standalone: true
})
export class NgxCheckPermissionComponent implements OnInit {
  constructor(public permission: NgxCheckPermissionService) { }
  async ngOnInit() {
    await this.checkPermissions();
  }

  public async checkPermissions() {
    await this.permission.getAllPermissions().then((permisssions) => {
      console.log(permisssions);
    });
  }
}
