import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsWrapperComponent } from './meetings-wrapper.component';

describe('MeetingsWrapperComponent', () => {
  let component: MeetingsWrapperComponent;
  let fixture: ComponentFixture<MeetingsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingsWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
