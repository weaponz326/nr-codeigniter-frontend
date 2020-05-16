import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementWrapperComponent } from './procurement-wrapper.component';

describe('ProcurementWrapperComponent', () => {
  let component: ProcurementWrapperComponent;
  let fixture: ComponentFixture<ProcurementWrapperComponent>;

  beforeEach(async(() => {
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
