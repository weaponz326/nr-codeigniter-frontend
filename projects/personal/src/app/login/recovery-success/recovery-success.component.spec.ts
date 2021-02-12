import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RecoverySuccessComponent } from './recovery-success.component';

describe('RecoverySuccessComponent', () => {
  let component: RecoverySuccessComponent;
  let fixture: ComponentFixture<RecoverySuccessComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoverySuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
