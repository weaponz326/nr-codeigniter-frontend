import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PayrollDetailsComponent } from './payroll-details.component';

describe('PayrollDetailsComponent', () => {
  let component: PayrollDetailsComponent;
  let fixture: ComponentFixture<PayrollDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
