import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssessmentTableComponent } from './assessment-table.component';

describe('AssessmentTableComponent', () => {
  let component: AssessmentTableComponent;
  let fixture: ComponentFixture<AssessmentTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
