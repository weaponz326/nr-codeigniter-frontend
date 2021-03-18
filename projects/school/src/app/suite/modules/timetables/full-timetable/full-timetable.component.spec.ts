import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTimetableComponent } from './full-timetable.component';

describe('FullTimetableComponent', () => {
  let component: FullTimetableComponent;
  let fixture: ComponentFixture<FullTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullTimetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
