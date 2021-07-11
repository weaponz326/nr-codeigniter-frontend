import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookedRoomComponent } from './add-booked-room.component';

describe('AddBookedRoomComponent', () => {
  let component: AddBookedRoomComponent;
  let fixture: ComponentFixture<AddBookedRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookedRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookedRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
