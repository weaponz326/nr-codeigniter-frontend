import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StudentsWrapperComponent } from './students-wrapper.component';

describe('StudentsWrapperComponent', () => {
  let component: StudentsWrapperComponent;
  let fixture: ComponentFixture<StudentsWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
