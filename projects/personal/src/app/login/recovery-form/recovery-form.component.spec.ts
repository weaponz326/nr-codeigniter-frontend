import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RecoveryFormComponent } from './recovery-form.component';

describe('RecoveryFormComponent', () => {
  let component: RecoveryFormComponent;
  let fixture: ComponentFixture<RecoveryFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
