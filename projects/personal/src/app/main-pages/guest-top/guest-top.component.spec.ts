import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GuestTopComponent } from './guest-top.component';

describe('GuestTopComponent', () => {
  let component: GuestTopComponent;
  let fixture: ComponentFixture<GuestTopComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
