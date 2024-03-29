import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewAdmissionComponent } from './view-admission.component';

describe('ViewAdmissionComponent', () => {
  let component: ViewAdmissionComponent;
  let fixture: ComponentFixture<ViewAdmissionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAdmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
