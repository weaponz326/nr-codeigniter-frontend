import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllManufacturingComponent } from './all-manufacturing.component';

describe('AllManufacturingComponent', () => {
  let component: AllManufacturingComponent;
  let fixture: ComponentFixture<AllManufacturingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllManufacturingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllManufacturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
