import { Component } from '@angular/core';
import { CURSOR } from "./CURSOR";

@Component({
  selector: 'app-ngx-cursor-hover',
  templateUrl: './ngx-cursor-hover.component.html',
  styleUrls: ['./ngx-cursor-hover.component.scss']
})
export class NgxCursorHoverComponent {
  public cursors: any[] = CURSOR;
  constructor() {
    let cursorcss: string = "";
    console.log(this.cursors);
    this.cursors.forEach((cursor) => {
      cursorcss += `
| ${cursor.type} | ${cursor.category} | .ngx-cursor-pointer-${cursor.type} |
      `;
    });
    console.log(cursorcss);
  }
}
