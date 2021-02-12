import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewAssessmentComponent } from './new-assessment.component';

describe('NewAssessmentComponent', () => {
  let component: NewAssessmentComponent;
  let fixture: ComponentFixture<NewAssessmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
