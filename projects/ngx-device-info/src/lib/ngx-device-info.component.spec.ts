import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDeviceInfoComponent } from './ngx-device-info.component';

describe('NgxDeviceInfoComponent', () => {
  let component: NgxDeviceInfoComponent;
  let fixture: ComponentFixture<NgxDeviceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDeviceInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxDeviceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
