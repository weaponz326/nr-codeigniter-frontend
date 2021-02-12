import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllRoomsComponent } from './all-rooms.component';

describe('AllRoomsComponent', () => {
  let component: AllRoomsComponent;
  let fixture: ComponentFixture<AllRoomsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
