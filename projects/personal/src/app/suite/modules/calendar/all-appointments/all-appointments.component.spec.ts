import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllAppointmentsComponent } from './all-appointments.component';

describe('AllAppointmentsComponent', () => {
  let component: AllAppointmentsComponent;
  let fixture: ComponentFixture<AllAppointmentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
