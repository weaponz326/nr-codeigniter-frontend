import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionPlanWrapperComponent } from './action-plan-wrapper.component';

describe('ActionPlanWrapperComponent', () => {
  let component: ActionPlanWrapperComponent;
  let fixture: ComponentFixture<ActionPlanWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionPlanWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionPlanWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
