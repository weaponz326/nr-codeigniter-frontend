import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousekeepingWrapperComponent } from './housekeeping-wrapper.component';

describe('HousekeepingWrapperComponent', () => {
  let component: HousekeepingWrapperComponent;
  let fixture: ComponentFixture<HousekeepingWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousekeepingWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousekeepingWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
