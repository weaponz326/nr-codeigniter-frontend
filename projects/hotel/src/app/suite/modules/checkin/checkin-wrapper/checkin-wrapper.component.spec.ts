import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CheckinWrapperComponent } from './checkin-wrapper.component';

describe('CheckinWrapperComponent', () => {
  let component: CheckinWrapperComponent;
  let fixture: ComponentFixture<CheckinWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
