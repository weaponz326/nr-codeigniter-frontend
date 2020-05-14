import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsWrapperComponent } from './rooms-wrapper.component';

describe('RoomsWrapperComponent', () => {
  let component: RoomsWrapperComponent;
  let fixture: ComponentFixture<RoomsWrapperComponent>;

  beforeEach(async(() => {
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
