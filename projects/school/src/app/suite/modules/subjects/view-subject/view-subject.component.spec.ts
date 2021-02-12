import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewSubjectComponent } from './view-subject.component';

describe('ViewSubjectComponent', () => {
  let component: ViewSubjectComponent;
  let fixture: ComponentFixture<ViewSubjectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
