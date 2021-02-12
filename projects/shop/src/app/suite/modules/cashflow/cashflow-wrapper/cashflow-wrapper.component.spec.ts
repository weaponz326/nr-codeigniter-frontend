import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CashflowWrapperComponent } from './cashflow-wrapper.component';

describe('CashflowWrapperComponent', () => {
  let component: CashflowWrapperComponent;
  let fixture: ComponentFixture<CashflowWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CashflowWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashflowWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
