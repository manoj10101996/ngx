import { Component } from '@angular/core';
import { NgxSlightScrollDirective } from '../../../../projects/ngx-slight-scroll/src/lib/ngx-slight-scroll.directive';


@Component({
    selector: 'app-ngx-slight-scroll',
    templateUrl: './ngx-slight-scroll.component.html',
    styleUrls: ['./ngx-slight-scroll.component.scss'],
    standalone: true,
    imports: [NgxSlightScrollDirective]
})
export class NgxSlightScrollComponent {
  public list: any[] = [];

  constructor() {

    for (let index = 0; index < 12; index++) {
      this.list.push({
        color: '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')
      });
    }
  }

  scrollEndEvent(event: any) {
    console.log("Scroll end reached from directive");
  }
}
