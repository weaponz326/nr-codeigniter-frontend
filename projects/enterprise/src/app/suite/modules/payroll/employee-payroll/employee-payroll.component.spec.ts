import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmployeePayrollComponent } from './employee-payroll.component';

describe('EmployeePayrollComponent', () => {
  let component: EmployeePayrollComponent;
  let fixture: ComponentFixture<EmployeePayrollComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeePayrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
