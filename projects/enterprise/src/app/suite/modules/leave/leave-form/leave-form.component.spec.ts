import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LeaveFormComponent } from './leave-form.component';

describe('LeaveFormComponent', () => {
  let component: LeaveFormComponent;
  let fixture: ComponentFixture<LeaveFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
