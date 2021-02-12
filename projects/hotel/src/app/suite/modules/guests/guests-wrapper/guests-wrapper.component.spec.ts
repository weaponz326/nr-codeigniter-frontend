import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GuestsWrapperComponent } from './guests-wrapper.component';

describe('GuestsWrapperComponent', () => {
  let component: GuestsWrapperComponent;
  let fixture: ComponentFixture<GuestsWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
