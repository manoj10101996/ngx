import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPrimeColorPickerComponent } from './ngx-prime-color-picker.component';

describe('NgxPrimeColorPickerComponent', () => {
  let component: NgxPrimeColorPickerComponent;
  let fixture: ComponentFixture<NgxPrimeColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxPrimeColorPickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxPrimeColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
