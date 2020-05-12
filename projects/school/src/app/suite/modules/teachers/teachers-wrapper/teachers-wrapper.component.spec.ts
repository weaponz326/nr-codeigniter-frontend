import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersWrapperComponent } from './teachers-wrapper.component';

describe('TeachersWrapperComponent', () => {
  let component: TeachersWrapperComponent;
  let fixture: ComponentFixture<TeachersWrapperComponent>;

  beforeEach(async(() => {
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
