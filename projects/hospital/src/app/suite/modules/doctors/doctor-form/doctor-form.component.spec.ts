import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DoctorFormComponent } from './doctor-form.component';

describe('DoctorFormComponent', () => {
  let component: DoctorFormComponent;
  let fixture: ComponentFixture<DoctorFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
