import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowWrapperComponent } from './cashflow-wrapper.component';

describe('CashflowWrapperComponent', () => {
  let component: CashflowWrapperComponent;
  let fixture: ComponentFixture<CashflowWrapperComponent>;

  beforeEach(async(() => {
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
