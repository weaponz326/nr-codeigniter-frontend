import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppointmentsWrapperComponent } from './appointments-wrapper.component';

describe('AppointmentsWrapperComponent', () => {
  let component: AppointmentsWrapperComponent;
  let fixture: ComponentFixture<AppointmentsWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
