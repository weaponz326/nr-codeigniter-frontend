import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanKanbanComponent } from './plan-kanban.component';

describe('PlanKanbanComponent', () => {
  let component: PlanKanbanComponent;
  let fixture: ComponentFixture<PlanKanbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanKanbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
