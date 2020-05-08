import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionsWrapperComponent } from './admissions-wrapper.component';

describe('AdmissionsWrapperComponent', () => {
  let component: AdmissionsWrapperComponent;
  let fixture: ComponentFixture<AdmissionsWrapperComponent>;

  beforeEach(async(() => {
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
