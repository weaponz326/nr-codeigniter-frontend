import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewStudentComponent } from './view-student.component';

describe('ViewStudentComponent', () => {
  let component: ViewStudentComponent;
  let fixture: ComponentFixture<ViewStudentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
