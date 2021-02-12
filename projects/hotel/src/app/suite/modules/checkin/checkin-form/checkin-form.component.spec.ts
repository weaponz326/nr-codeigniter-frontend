import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CheckinFormComponent } from './checkin-form.component';

describe('CheckinFormComponent', () => {
  let component: CheckinFormComponent;
  let fixture: ComponentFixture<CheckinFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
