import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollWrapperComponent } from './payroll-wrapper.component';

describe('PayrollWrapperComponent', () => {
  let component: PayrollWrapperComponent;
  let fixture: ComponentFixture<PayrollWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
