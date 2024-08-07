import { Component } from '@angular/core';
import { COLOROBJECT, NgxPrimeColorPickerComponent } from 'projects/ngx-prime-color-picker/src/public-api';
// import { COLOROBJECT, NgxPrimeColorPickerComponent } from 'ngx-prime-color-picker';

@Component({
  selector: 'app-ngx-prime-color-picker',
  standalone: true,
  imports: [NgxPrimeColorPickerComponent],
  templateUrl: './ngx-prime-color-picker.component.html',
  styleUrl: './ngx-prime-color-picker.component.scss'
})
export class PrimeColorPickerComponent {

  public color = '#ff9800';

  public currentColorObject(event: COLOROBJECT) {
    console.log('event: ', event);
  }
}
