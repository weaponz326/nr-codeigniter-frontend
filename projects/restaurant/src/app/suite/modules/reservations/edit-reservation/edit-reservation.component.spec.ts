import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditReservationComponent } from './edit-reservation.component';

describe('EditReservationComponent', () => {
  let component: EditReservationComponent;
  let fixture: ComponentFixture<EditReservationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
