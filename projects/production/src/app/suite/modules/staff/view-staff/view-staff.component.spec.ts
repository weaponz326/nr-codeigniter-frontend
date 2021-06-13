import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewStaffComponent } from './view-staff.component';

describe('ViewStaffComponent', () => {
  let component: ViewStaffComponent;
  let fixture: ComponentFixture<ViewStaffComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
