import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlanningComponent } from './all-planning.component';

describe('AllPlanningComponent', () => {
  let component: AllPlanningComponent;
  let fixture: ComponentFixture<AllPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
