import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StaffWrapperComponent } from './staff-wrapper.component';

describe('StaffWrapperComponent', () => {
  let component: StaffWrapperComponent;
  let fixture: ComponentFixture<StaffWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
