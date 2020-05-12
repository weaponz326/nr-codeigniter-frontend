import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAttendanceComponent } from './check-attendance.component';

describe('CheckAttendanceComponent', () => {
  let component: CheckAttendanceComponent;
  let fixture: ComponentFixture<CheckAttendanceComponent>;

  beforeEach(async(() => {
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
