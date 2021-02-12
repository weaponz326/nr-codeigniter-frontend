import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllCashflowComponent } from './all-cashflow.component';

describe('AllCashflowComponent', () => {
  let component: AllCashflowComponent;
  let fixture: ComponentFixture<AllCashflowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCashflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCashflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
