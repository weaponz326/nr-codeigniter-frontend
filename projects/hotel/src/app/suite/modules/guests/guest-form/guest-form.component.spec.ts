import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GuestFormComponent } from './guest-form.component';

describe('GuestFormComponent', () => {
  let component: GuestFormComponent;
  let fixture: ComponentFixture<GuestFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
