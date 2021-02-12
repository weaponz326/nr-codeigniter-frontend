import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClassReportComponent } from './class-report.component';

describe('ClassReportComponent', () => {
  let component: ClassReportComponent;
  let fixture: ComponentFixture<ClassReportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
