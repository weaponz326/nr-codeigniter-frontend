import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BudgetTablesComponent } from './budget-tables.component';

describe('BudgetTablesComponent', () => {
  let component: BudgetTablesComponent;
  let fixture: ComponentFixture<BudgetTablesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
