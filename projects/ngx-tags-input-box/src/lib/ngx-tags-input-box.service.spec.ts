import { TestBed } from '@angular/core/testing';

import { NgxTagsInputBoxService } from './ngx-tags-input-box.service';

describe('NgxTagsInputBoxService', () => {
  let service: NgxTagsInputBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTagsInputBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
