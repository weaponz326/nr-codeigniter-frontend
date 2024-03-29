import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DiagnosisWrapperComponent } from './diagnosis-wrapper.component';

describe('DiagnosisWrapperComponent', () => {
  let component: DiagnosisWrapperComponent;
  let fixture: ComponentFixture<DiagnosisWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosisWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
