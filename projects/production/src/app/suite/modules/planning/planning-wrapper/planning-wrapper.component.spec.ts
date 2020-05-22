import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWrapperComponent } from './planning-wrapper.component';

describe('PlanningWrapperComponent', () => {
  let component: PlanningWrapperComponent;
  let fixture: ComponentFixture<PlanningWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
