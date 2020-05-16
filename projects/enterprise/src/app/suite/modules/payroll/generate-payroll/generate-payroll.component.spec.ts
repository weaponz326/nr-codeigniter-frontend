import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePayrollComponent } from './generate-payroll.component';

describe('GeneratePayrollComponent', () => {
  let component: GeneratePayrollComponent;
  let fixture: ComponentFixture<GeneratePayrollComponent>;

  beforeEach(async(() => {
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
