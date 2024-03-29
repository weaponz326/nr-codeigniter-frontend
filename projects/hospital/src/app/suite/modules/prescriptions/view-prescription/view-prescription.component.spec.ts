import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewPrescriptionComponent } from './view-prescription.component';

describe('ViewPrescriptionComponent', () => {
  let component: ViewPrescriptionComponent;
  let fixture: ComponentFixture<ViewPrescriptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPrescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
