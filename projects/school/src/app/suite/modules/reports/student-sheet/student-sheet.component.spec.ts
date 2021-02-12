import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StudentSheetComponent } from './student-sheet.component';

describe('StudentSheetComponent', () => {
  let component: StudentSheetComponent;
  let fixture: ComponentFixture<StudentSheetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
