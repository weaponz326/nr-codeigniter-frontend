import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffSheetComponent } from './staff-sheet.component';

describe('StaffSheetComponent', () => {
  let component: StaffSheetComponent;
  let fixture: ComponentFixture<StaffSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
