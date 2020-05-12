import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermActivitiesComponent } from './term-activities.component';

describe('TermActivitiesComponent', () => {
  let component: TermActivitiesComponent;
  let fixture: ComponentFixture<TermActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
