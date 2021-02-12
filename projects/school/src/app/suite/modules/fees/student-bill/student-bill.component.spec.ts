import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StudentBillComponent } from './student-bill.component';

describe('StudentBillComponent', () => {
  let component: StudentBillComponent;
  let fixture: ComponentFixture<StudentBillComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
