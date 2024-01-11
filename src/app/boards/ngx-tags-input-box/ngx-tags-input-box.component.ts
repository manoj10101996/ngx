import { Component } from '@angular/core';
import { NgxTagsComponent } from '../../../../projects/ngx-tags-input-box/src/lib/ngx-tags/ngx-tags.component';

@Component({
  selector: 'app-ngx-tags-input-box',
  templateUrl: './ngx-tags-input-box.component.html',
  styleUrls: ['./ngx-tags-input-box.component.scss'],
  standalone: true,
  imports: [NgxTagsComponent]
})
export class NgxTagsInputBoxComponent {

  public rounded: boolean = false;
  public disabled: boolean = false;

  public tags: any[] = ['welcome', 'to', 'ngx-tags-input'];

  public displayTags(event: any) {
    // Your code goes here
  }
}
