import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBudgetComponent } from './all-budget.component';

describe('AllBudgetComponent', () => {
  let component: AllBudgetComponent;
  let fixture: ComponentFixture<AllBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBudgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
