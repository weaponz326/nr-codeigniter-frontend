import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddPrescriptionComponent } from './add-prescription.component';

describe('AddPrescriptionComponent', () => {
  let component: AddPrescriptionComponent;
  let fixture: ComponentFixture<AddPrescriptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
