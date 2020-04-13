import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryFormComponent } from './recovery-form.component';

describe('RecoveryFormComponent', () => {
  let component: RecoveryFormComponent;
  let fixture: ComponentFixture<RecoveryFormComponent>;

  beforeEach(async(() => {
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
