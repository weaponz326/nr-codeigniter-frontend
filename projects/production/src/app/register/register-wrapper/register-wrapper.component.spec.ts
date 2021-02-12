import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegisterWrapperComponent } from './register-wrapper.component';

describe('RegisterWrapperComponent', () => {
  let component: RegisterWrapperComponent;
  let fixture: ComponentFixture<RegisterWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
