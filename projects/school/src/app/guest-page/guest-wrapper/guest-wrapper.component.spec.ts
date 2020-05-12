import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestWrapperComponent } from './guest-wrapper.component';

describe('GuestWrapperComponent', () => {
  let component: GuestWrapperComponent;
  let fixture: ComponentFixture<GuestWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
