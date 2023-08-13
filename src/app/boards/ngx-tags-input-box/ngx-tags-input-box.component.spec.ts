import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTagsInputBoxComponent } from './ngx-tags-input-box.component';

describe('NgxTagsInputBoxComponent', () => {
  let component: NgxTagsInputBoxComponent;
  let fixture: ComponentFixture<NgxTagsInputBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTagsInputBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTagsInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
