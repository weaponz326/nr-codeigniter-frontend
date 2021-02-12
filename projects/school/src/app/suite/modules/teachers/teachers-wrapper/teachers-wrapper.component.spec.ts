import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeachersWrapperComponent } from './teachers-wrapper.component';

describe('TeachersWrapperComponent', () => {
  let component: TeachersWrapperComponent;
  let fixture: ComponentFixture<TeachersWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
