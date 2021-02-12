import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewAdmissionComponent } from './new-admission.component';

describe('NewAdmissionComponent', () => {
  let component: NewAdmissionComponent;
  let fixture: ComponentFixture<NewAdmissionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAdmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
