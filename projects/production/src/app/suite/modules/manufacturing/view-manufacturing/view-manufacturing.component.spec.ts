import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewManufacturingComponent } from './view-manufacturing.component';

describe('ViewManufacturingComponent', () => {
  let component: ViewManufacturingComponent;
  let fixture: ComponentFixture<ViewManufacturingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewManufacturingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewManufacturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
