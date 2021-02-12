import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllReservationsComponent } from './all-reservations.component';

describe('AllReservationsComponent', () => {
  let component: AllReservationsComponent;
  let fixture: ComponentFixture<AllReservationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
