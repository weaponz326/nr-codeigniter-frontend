import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDoctorComponent } from './select-doctor.component';

describe('SelectDoctorComponent', () => {
  let component: SelectDoctorComponent;
  let fixture: ComponentFixture<SelectDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
