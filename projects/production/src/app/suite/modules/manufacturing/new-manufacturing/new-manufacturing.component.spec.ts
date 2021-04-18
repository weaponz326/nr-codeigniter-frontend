import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewManufacturingComponent } from './new-manufacturing.component';

describe('NewManufacturingComponent', () => {
  let component: NewManufacturingComponent;
  let fixture: ComponentFixture<NewManufacturingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewManufacturingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewManufacturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
