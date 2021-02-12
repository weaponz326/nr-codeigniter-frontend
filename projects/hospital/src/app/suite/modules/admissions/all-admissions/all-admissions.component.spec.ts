import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllAdmissionsComponent } from './all-admissions.component';

describe('AllAdmissionsComponent', () => {
  let component: AllAdmissionsComponent;
  let fixture: ComponentFixture<AllAdmissionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAdmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAdmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
