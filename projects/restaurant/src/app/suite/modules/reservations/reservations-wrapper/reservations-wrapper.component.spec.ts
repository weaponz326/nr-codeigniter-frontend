import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsWrapperComponent } from './reservations-wrapper.component';

describe('ReservationsWrapperComponent', () => {
  let component: ReservationsWrapperComponent;
  let fixture: ComponentFixture<ReservationsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
