import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewDiagnosisComponent } from './view-diagnosis.component';

describe('ViewDiagnosisComponent', () => {
  let component: ViewDiagnosisComponent;
  let fixture: ComponentFixture<ViewDiagnosisComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDiagnosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
