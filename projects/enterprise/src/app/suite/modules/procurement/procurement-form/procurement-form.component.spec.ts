import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementFormComponent } from './procurement-form.component';

describe('ProcurementFormComponent', () => {
  let component: ProcurementFormComponent;
  let fixture: ComponentFixture<ProcurementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcurementFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
