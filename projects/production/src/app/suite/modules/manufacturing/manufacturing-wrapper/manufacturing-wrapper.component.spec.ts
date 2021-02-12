import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ManufacturingWrapperComponent } from './manufacturing-wrapper.component';

describe('ManufacturingWrapperComponent', () => {
  let component: ManufacturingWrapperComponent;
  let fixture: ComponentFixture<ManufacturingWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturingWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturingWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
