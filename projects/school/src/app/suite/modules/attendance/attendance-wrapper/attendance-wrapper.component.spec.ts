import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AttendanceWrapperComponent } from './attendance-wrapper.component';

describe('AttendanceWrapperComponent', () => {
  let component: AttendanceWrapperComponent;
  let fixture: ComponentFixture<AttendanceWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
