import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllPatientsComponent } from './all-patients.component';

describe('AllPatientsComponent', () => {
  let component: AllPatientsComponent;
  let fixture: ComponentFixture<AllPatientsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
