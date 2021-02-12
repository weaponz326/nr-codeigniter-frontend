import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewCalendarComponent } from './view-calendar.component';

describe('ViewCalendarComponent', () => {
  let component: ViewCalendarComponent;
  let fixture: ComponentFixture<ViewCalendarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
