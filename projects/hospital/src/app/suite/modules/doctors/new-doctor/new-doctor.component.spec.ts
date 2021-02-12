import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewDoctorComponent } from './new-doctor.component';

describe('NewDoctorComponent', () => {
  let component: NewDoctorComponent;
  let fixture: ComponentFixture<NewDoctorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
