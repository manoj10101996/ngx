import { TestBed } from '@angular/core/testing';

import { NgxDeviceInfoService } from './ngx-device-info.service';

describe('NgxDeviceInfoService', () => {
  let service: NgxDeviceInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDeviceInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
