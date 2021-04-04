import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProcurementComponent } from './view-procurement.component';

describe('ViewProcurementComponent', () => {
  let component: ViewProcurementComponent;
  let fixture: ComponentFixture<ViewProcurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProcurementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
