import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddAssessmentComponent } from './add-assessment.component';

describe('AddAssessmentComponent', () => {
  let component: AddAssessmentComponent;
  let fixture: ComponentFixture<AddAssessmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
