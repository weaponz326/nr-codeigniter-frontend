import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDrugComponent } from './select-drug.component';

describe('SelectDrugComponent', () => {
  let component: SelectDrugComponent;
  let fixture: ComponentFixture<SelectDrugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDrugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
