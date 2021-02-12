import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdmissionActivitiesComponent } from './admission-activities.component';

describe('AdmissionActivitiesComponent', () => {
  let component: AdmissionActivitiesComponent;
  let fixture: ComponentFixture<AdmissionActivitiesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
