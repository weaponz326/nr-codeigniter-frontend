import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RecoveryAwaitComponent } from './recovery-await.component';

describe('RecoveryAwaitComponent', () => {
  let component: RecoveryAwaitComponent;
  let fixture: ComponentFixture<RecoveryAwaitComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryAwaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryAwaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
