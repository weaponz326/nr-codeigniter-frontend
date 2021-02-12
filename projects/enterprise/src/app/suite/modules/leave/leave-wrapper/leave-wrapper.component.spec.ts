import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LeaveWrapperComponent } from './leave-wrapper.component';

describe('LeaveWrapperComponent', () => {
  let component: LeaveWrapperComponent;
  let fixture: ComponentFixture<LeaveWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
