import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterWrapperComponent } from './roster-wrapper.component';

describe('RosterWrapperComponent', () => {
  let component: RosterWrapperComponent;
  let fixture: ComponentFixture<RosterWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RosterWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
