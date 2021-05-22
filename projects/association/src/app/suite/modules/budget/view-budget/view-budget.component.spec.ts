import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBudgetComponent } from './view-budget.component';

describe('ViewBudgetComponent', () => {
  let component: ViewBudgetComponent;
  let fixture: ComponentFixture<ViewBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBudgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
