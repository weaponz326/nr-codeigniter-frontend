import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewPatientComponent } from './view-patient.component';

describe('ViewPatientComponent', () => {
  let component: ViewPatientComponent;
  let fixture: ComponentFixture<ViewPatientComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
