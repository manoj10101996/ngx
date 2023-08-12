import { Component, OnInit, Input } from '@angular/core';


type mode = "primary" | "success" | "danger" | "info" | "warning";
@Component({
  selector: 'ngx-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  textColor: string;
  @Input() mode: mode;
  @Input() close: any;
  @Input() bold: any;
  @Input() text: any;
  @Input() disabled: any;

  public color: string;

  ngOnInit(): void {
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
    } else {
      this.color = 'white';
      this.textColor = 'black';
      this.bold = 'true';
    }
  }
}
