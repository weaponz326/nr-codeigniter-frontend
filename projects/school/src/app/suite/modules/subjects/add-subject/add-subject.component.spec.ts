import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddSubjectComponent } from './add-subject.component';

describe('AddSubjectComponent', () => {
  let component: AddSubjectComponent;
  let fixture: ComponentFixture<AddSubjectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
