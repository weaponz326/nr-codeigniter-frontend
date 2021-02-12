import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdmissionsWrapperComponent } from './admissions-wrapper.component';

describe('AdmissionsWrapperComponent', () => {
  let component: AdmissionsWrapperComponent;
  let fixture: ComponentFixture<AdmissionsWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
