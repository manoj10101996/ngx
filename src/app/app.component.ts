import { Component } from '@angular/core';
import { META } from 'projects/ngx-default-image/src/lib/ngx-default-image.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public imageMeta: META;
  public imageURL = "https://cdn-icons-png.flaticon.com/128/1829/1829412.png";

  public imageMetaInfo(event: META) {
    this.imageMeta = event;
  }
}
