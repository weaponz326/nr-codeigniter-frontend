import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalEmployeesComponent } from './appraisal-employees.component';

describe('AppraisalEmployeesComponent', () => {
  let component: AppraisalEmployeesComponent;
  let fixture: ComponentFixture<AppraisalEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppraisalEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
