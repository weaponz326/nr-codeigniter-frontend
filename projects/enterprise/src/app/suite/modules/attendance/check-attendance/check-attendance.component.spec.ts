import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CheckAttendanceComponent } from './check-attendance.component';

describe('CheckAttendanceComponent', () => {
  let component: CheckAttendanceComponent;
  let fixture: ComponentFixture<CheckAttendanceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
