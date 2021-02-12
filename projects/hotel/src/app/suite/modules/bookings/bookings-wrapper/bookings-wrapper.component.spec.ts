import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BookingsWrapperComponent } from './bookings-wrapper.component';

describe('BookingsWrapperComponent', () => {
  let component: BookingsWrapperComponent;
  let fixture: ComponentFixture<BookingsWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
