import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GeneratePayrollComponent } from './generate-payroll.component';

describe('GeneratePayrollComponent', () => {
  let component: GeneratePayrollComponent;
  let fixture: ComponentFixture<GeneratePayrollComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratePayrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratePayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
