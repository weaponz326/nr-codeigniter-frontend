import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPrescriptionComponent } from './select-prescription.component';

describe('SelectPrescriptionComponent', () => {
  let component: SelectPrescriptionComponent;
  let fixture: ComponentFixture<SelectPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
