import { Component } from '@angular/core';

@Component({
  selector: 'app-ngx-tags-input-box',
  templateUrl: './ngx-tags-input-box.component.html',
  styleUrls: ['./ngx-tags-input-box.component.scss']
})
export class NgxTagsInputBoxComponent {

  public rounded: boolean = false;
  public disabled: boolean = true;

  public tags: any[] = ['welcome', 'to', 'ngx-tags-input'];

  public displayTags(event: any) {
    // Your code goes here
  }
}
