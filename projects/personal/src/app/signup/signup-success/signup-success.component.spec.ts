import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SignupSuccessComponent } from './signup-success.component';

describe('SignupSuccessComponent', () => {
  let component: SignupSuccessComponent;
  let fixture: ComponentFixture<SignupSuccessComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
