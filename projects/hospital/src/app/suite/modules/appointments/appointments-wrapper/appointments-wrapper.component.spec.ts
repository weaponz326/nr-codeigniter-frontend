import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsWrapperComponent } from './appointments-wrapper.component';

describe('AppointmentsWrapperComponent', () => {
  let component: AppointmentsWrapperComponent;
  let fixture: ComponentFixture<AppointmentsWrapperComponent>;

  beforeEach(async(() => {
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
