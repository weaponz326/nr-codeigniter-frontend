import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewStudentComponent } from './new-student.component';

describe('NewStudentComponent', () => {
  let component: NewStudentComponent;
  let fixture: ComponentFixture<NewStudentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
