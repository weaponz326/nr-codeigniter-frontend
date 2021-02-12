import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KanbanViewComponent } from './kanban-view.component';

describe('KanbanViewComponent', () => {
  let component: KanbanViewComponent;
  let fixture: ComponentFixture<KanbanViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
