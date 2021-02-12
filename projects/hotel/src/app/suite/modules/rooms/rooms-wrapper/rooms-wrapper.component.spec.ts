import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RoomsWrapperComponent } from './rooms-wrapper.component';

describe('RoomsWrapperComponent', () => {
  let component: RoomsWrapperComponent;
  let fixture: ComponentFixture<RoomsWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
