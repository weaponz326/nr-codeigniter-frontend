import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClassFormComponent } from './class-form.component';

describe('ClassFormComponent', () => {
  let component: ClassFormComponent;
  let fixture: ComponentFixture<ClassFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
