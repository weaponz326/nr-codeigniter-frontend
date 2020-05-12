import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsWrapperComponent } from './subjects-wrapper.component';

describe('SubjectsWrapperComponent', () => {
  let component: SubjectsWrapperComponent;
  let fixture: ComponentFixture<SubjectsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
