import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminWrapperComponent } from './admin-wrapper.component';

describe('AdminWrapperComponent', () => {
  let component: AdminWrapperComponent;
  let fixture: ComponentFixture<AdminWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
