import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditAppointmentComponent } from './edit-appointment.component';

describe('EditAppointmentComponent', () => {
  let component: EditAppointmentComponent;
  let fixture: ComponentFixture<EditAppointmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
