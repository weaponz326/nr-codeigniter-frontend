import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesWrapperComponent } from './employees-wrapper.component';

describe('EmployeesWrapperComponent', () => {
  let component: EmployeesWrapperComponent;
  let fixture: ComponentFixture<EmployeesWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
