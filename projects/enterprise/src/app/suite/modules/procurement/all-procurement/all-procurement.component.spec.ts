import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllProcurementComponent } from './all-procurement.component';

describe('AllProcurementComponent', () => {
  let component: AllProcurementComponent;
  let fixture: ComponentFixture<AllProcurementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProcurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProcurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
