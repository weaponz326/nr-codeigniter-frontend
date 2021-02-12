import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewPatientComponent } from './new-patient.component';

describe('NewPatientComponent', () => {
  let component: NewPatientComponent;
  let fixture: ComponentFixture<NewPatientComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
