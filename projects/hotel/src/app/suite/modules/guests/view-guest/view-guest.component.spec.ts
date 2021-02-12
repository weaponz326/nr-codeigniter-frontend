import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewGuestComponent } from './view-guest.component';

describe('ViewGuestComponent', () => {
  let component: ViewGuestComponent;
  let fixture: ComponentFixture<ViewGuestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
