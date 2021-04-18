import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesWrapperComponent } from './schedules-wrapper.component';

describe('SchedulesWrapperComponent', () => {
  let component: SchedulesWrapperComponent;
  let fixture: ComponentFixture<SchedulesWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulesWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
