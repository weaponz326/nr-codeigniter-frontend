import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StudentReportComponent } from './student-report.component';

describe('StudentReportComponent', () => {
  let component: StudentReportComponent;
  let fixture: ComponentFixture<StudentReportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
