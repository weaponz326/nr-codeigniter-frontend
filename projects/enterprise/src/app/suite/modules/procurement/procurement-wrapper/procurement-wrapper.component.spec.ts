import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProcurementWrapperComponent } from './procurement-wrapper.component';

describe('ProcurementWrapperComponent', () => {
  let component: ProcurementWrapperComponent;
  let fixture: ComponentFixture<ProcurementWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcurementWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
