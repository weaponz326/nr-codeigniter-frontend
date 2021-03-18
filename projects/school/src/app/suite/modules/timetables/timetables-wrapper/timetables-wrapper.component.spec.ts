import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetablesWrapperComponent } from './timetables-wrapper.component';

describe('TimetablesWrapperComponent', () => {
  let component: TimetablesWrapperComponent;
  let fixture: ComponentFixture<TimetablesWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimetablesWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetablesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
