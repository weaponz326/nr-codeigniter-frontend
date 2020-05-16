import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsWrapperComponent } from './departments-wrapper.component';

describe('DepartmentsWrapperComponent', () => {
  let component: DepartmentsWrapperComponent;
  let fixture: ComponentFixture<DepartmentsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
