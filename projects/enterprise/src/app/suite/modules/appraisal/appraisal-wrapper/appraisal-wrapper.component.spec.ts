import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalWrapperComponent } from './appraisal-wrapper.component';

describe('AppraisalWrapperComponent', () => {
  let component: AppraisalWrapperComponent;
  let fixture: ComponentFixture<AppraisalWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisalWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
