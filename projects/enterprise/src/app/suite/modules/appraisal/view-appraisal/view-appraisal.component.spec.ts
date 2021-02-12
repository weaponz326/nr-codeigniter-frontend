import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewAppraisalComponent } from './view-appraisal.component';

describe('ViewAppraisalComponent', () => {
  let component: ViewAppraisalComponent;
  let fixture: ComponentFixture<ViewAppraisalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAppraisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
