import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesWrapperComponent } from './classes-wrapper.component';

describe('ClassesWrapperComponent', () => {
  let component: ClassesWrapperComponent;
  let fixture: ComponentFixture<ClassesWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
