import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllAppraisalComponent } from './all-appraisal.component';

describe('AllAppraisalComponent', () => {
  let component: AllAppraisalComponent;
  let fixture: ComponentFixture<AllAppraisalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAppraisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
