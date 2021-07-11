import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookedRoomComponent } from './edit-booked-room.component';

describe('EditBookedRoomComponent', () => {
  let component: EditBookedRoomComponent;
  let fixture: ComponentFixture<EditBookedRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBookedRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookedRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
