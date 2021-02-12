import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrescriptionDetailsComponent } from './prescription-details.component';

describe('PrescriptionDetailsComponent', () => {
  let component: PrescriptionDetailsComponent;
  let fixture: ComponentFixture<PrescriptionDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
