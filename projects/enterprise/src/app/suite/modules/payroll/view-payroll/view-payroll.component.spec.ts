import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewPayrollComponent } from './view-payroll.component';

describe('ViewPayrollComponent', () => {
  let component: ViewPayrollComponent;
  let fixture: ComponentFixture<ViewPayrollComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPayrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
