import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllBookingsComponent } from './all-bookings.component';

describe('AllBookingsComponent', () => {
  let component: AllBookingsComponent;
  let fixture: ComponentFixture<AllBookingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
