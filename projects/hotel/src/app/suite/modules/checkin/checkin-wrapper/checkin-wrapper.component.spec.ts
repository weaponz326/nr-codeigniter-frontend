import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinWrapperComponent } from './checkin-wrapper.component';

describe('CheckinWrapperComponent', () => {
  let component: CheckinWrapperComponent;
  let fixture: ComponentFixture<CheckinWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
