import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceWrapperComponent } from './attendance-wrapper.component';

describe('AttendanceWrapperComponent', () => {
  let component: AttendanceWrapperComponent;
  let fixture: ComponentFixture<AttendanceWrapperComponent>;

  beforeEach(async(() => {
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
