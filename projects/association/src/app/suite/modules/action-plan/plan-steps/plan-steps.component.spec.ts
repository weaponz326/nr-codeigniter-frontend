import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanStepsComponent } from './plan-steps.component';

describe('PlanStepsComponent', () => {
  let component: PlanStepsComponent;
  let fixture: ComponentFixture<PlanStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
