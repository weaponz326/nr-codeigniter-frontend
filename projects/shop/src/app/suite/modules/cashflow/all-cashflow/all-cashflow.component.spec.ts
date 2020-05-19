import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCashflowComponent } from './all-cashflow.component';

describe('AllCashflowComponent', () => {
  let component: AllCashflowComponent;
  let fixture: ComponentFixture<AllCashflowComponent>;

  beforeEach(async(() => {
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
