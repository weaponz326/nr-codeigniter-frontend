import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionActivitiesComponent } from './admission-activities.component';

describe('AdmissionActivitiesComponent', () => {
  let component: AdmissionActivitiesComponent;
  let fixture: ComponentFixture<AdmissionActivitiesComponent>;

  beforeEach(async(() => {
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
