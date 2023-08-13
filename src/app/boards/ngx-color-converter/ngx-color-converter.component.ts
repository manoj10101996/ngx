import { Component } from '@angular/core';
import { NgxColorConverterService } from 'projects/ngx-color-converter/src/public-api';

@Component({
  selector: 'app-ngx-color-converter',
  templateUrl: './ngx-color-converter.component.html',
  styleUrls: ['./ngx-color-converter.component.scss']
})
export class NgxColorConverterComponent {
  constructor(private colors: NgxColorConverterService) {
    console.log(this.colors.toColorObject('#000fff'));
    console.log(this.colors.toColorObject('crimson'));
    console.log(this.colors.toColorObject('rgb(0,0,0)'));
    console.log(this.colors.toColorObject('hsl(100,2,4)'));
    console.log(this.colors.toColorObject('cymk(1,2,3,4)'));
  }
}
