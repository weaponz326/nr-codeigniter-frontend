import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PayrollWrapperComponent } from './payroll-wrapper.component';

describe('PayrollWrapperComponent', () => {
  let component: PayrollWrapperComponent;
  let fixture: ComponentFixture<PayrollWrapperComponent>;

  beforeEach(waitForAsync(() => {
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
