import { Component } from '@angular/core';
import { COLOREVENT } from 'projects/ngx-color-palette/src/lib/RAW';

@Component({
  selector: 'app-ngx-color-palette',
  templateUrl: './ngx-color-palette.component.html',
  styleUrls: ['./ngx-color-palette.component.scss']
})
export class NgxColorPaletteComponent {
  title = 'Ngx-Color-Palette';
  color ="#FBC02D";
  color2 ="#ff9800";


  public currentColor(event: COLOREVENT) {
    this.color = event.color;
  }

  public currentColor2(event: COLOREVENT) {
    this.color2 = event.color;
  }
}
