import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssessmentWrapperComponent } from './assessment-wrapper.component';

describe('AssessmentWrapperComponent', () => {
  let component: AssessmentWrapperComponent;
  let fixture: ComponentFixture<AssessmentWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
