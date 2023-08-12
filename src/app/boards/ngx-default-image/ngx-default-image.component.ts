import { Component } from '@angular/core';
import { META } from 'projects/ngx-default-image/src/public-api';

@Component({
  selector: 'app-ngx-default-image',
  templateUrl: './ngx-default-image.component.html',
  styleUrls: ['./ngx-default-image.component.scss']
})
export class NgxDefaultImageComponent {
  public imageMeta: META;
  public imageURL = "https://cdn-icons-png.flaticon.com/128/1829/1829412.png";

  public imageMetaInfo(event: META) {
    this.imageMeta = event;
  }
}
