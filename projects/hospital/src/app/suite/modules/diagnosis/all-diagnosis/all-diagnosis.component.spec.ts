import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDiagnosisComponent } from './all-diagnosis.component';

describe('AllDiagnosisComponent', () => {
  let component: AllDiagnosisComponent;
  let fixture: ComponentFixture<AllDiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDiagnosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
