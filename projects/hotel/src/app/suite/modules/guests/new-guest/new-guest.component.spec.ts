import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewGuestComponent } from './new-guest.component';

describe('NewGuestComponent', () => {
  let component: NewGuestComponent;
  let fixture: ComponentFixture<NewGuestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
