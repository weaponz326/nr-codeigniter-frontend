import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewDoctorComponent } from './view-doctor.component';

describe('ViewDoctorComponent', () => {
  let component: ViewDoctorComponent;
  let fixture: ComponentFixture<ViewDoctorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
