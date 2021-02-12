import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BudgetWrapperComponent } from './budget-wrapper.component';

describe('BudgetWrapperComponent', () => {
  let component: BudgetWrapperComponent;
  let fixture: ComponentFixture<BudgetWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
