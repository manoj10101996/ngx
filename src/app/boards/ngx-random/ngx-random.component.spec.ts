import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRandomComponent } from './ngx-random.component';

describe('NgxRandomComponent', () => {
  let component: NgxRandomComponent;
  let fixture: ComponentFixture<NgxRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [NgxRandomComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(NgxRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
