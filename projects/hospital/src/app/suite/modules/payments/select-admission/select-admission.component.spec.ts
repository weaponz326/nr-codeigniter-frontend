import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAdmissionComponent } from './select-admission.component';

describe('SelectAdmissionComponent', () => {
  let component: SelectAdmissionComponent;
  let fixture: ComponentFixture<SelectAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAdmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
