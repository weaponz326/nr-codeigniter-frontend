import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewStaffComponent } from './new-staff.component';

describe('NewStaffComponent', () => {
  let component: NewStaffComponent;
  let fixture: ComponentFixture<NewStaffComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
