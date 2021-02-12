import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VerificationAwaitComponent } from './verification-await.component';

describe('VerificationAwaitComponent', () => {
  let component: VerificationAwaitComponent;
  let fixture: ComponentFixture<VerificationAwaitComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationAwaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationAwaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
