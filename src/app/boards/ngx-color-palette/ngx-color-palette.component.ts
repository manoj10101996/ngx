import { Component } from '@angular/core';
import { COLOREVENT } from 'projects/ngx-color-palette/src/public-api';
import { NgxColorPaletteComponent as NgxColorPaletteComponent_1 } from '../../../../projects/ngx-color-palette/src/lib/ngx-color-palette.component';

@Component({
    selector: 'app-ngx-color-palette',
    templateUrl: './ngx-color-palette.component.html',
    styleUrls: ['./ngx-color-palette.component.scss'],
    standalone: true,
    imports: [NgxColorPaletteComponent_1]
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
