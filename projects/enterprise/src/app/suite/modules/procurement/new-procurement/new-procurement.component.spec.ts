import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProcurementComponent } from './new-procurement.component';

describe('NewProcurementComponent', () => {
  let component: NewProcurementComponent;
  let fixture: ComponentFixture<NewProcurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProcurementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProcurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
