import { Component, EventEmitter, Input } from '@angular/core';

type mode = "primary" | "success" | "danger" | "info" | "warning" | "light";

@Component({
  selector: 'ngx-tags-input',
  templateUrl: './ngx-tags.component.html',
  styleUrls: ['./ngx-tags.component.css'],
  standalone: true,
  imports: []
})
export class NgxTagsComponent {
  tagsChange: EventEmitter<any>;
  @Input() limit: number = 25;
  @Input() mode: mode;
  @Input() placeholder: string;
  @Input() tags: any[];
  @Input() rounded: boolean = false;
  @Input() disabled: boolean = false;
  @Input() distinct: boolean = true;

  public color: string;
  constructor() {
    this.tagsChange = new EventEmitter();
    this.tags = [];
  }

  ngOnInit() {
    this.limit = this.limit || 25;
    this.placeholder = this.placeholder + `( Maximum ${this.limit} )` || `Add tags ( Maximum ${this.limit} )`;
    if (this.mode === 'success') {
      this.color = 'green';
    } else if (this.mode === 'primary') {
      this.color = '#0d47a1';
    } else if (this.mode === 'danger') {
      this.color = 'crimson';
    } else if (this.mode === 'warning') {
      this.color = '#ff9800';
    } else if (this.mode === 'info') {
      this.color = 'cornflowerblue';
    } else if (this.mode === 'light') {
      this.color = 'gray';
    } else {
      this.color = 'cornflowerblue';
    }
  }

  add(e: any) {
    let tagString: string = e.target.value;
    if (this.tags.length < this.limit - 1) {
      if (this.distinct && !this.tags.includes(tagString)) {
        this.tags.push(e.target.value);

        e.target.value = '';
        this.tagsChange.emit(this.tags);
      }
    }
    else {
      this.tags[this.limit - 1] = e.target.value;
    }
  }

  remove(i: number) {
    this.tags.splice(i, 1);
  }
}
