import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoginWrapperComponent } from './login-wrapper.component';

describe('LoginWrapperComponent', () => {
  let component: LoginWrapperComponent;
  let fixture: ComponentFixture<LoginWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
