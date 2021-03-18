import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTimetableComponent } from './class-timetable.component';

describe('ClassTimetableComponent', () => {
  let component: ClassTimetableComponent;
  let fixture: ComponentFixture<ClassTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassTimetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
