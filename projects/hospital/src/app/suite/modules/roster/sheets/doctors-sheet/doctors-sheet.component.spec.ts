import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsSheetComponent } from './doctors-sheet.component';

describe('DoctorsSheetComponent', () => {
  let component: DoctorsSheetComponent;
  let fixture: ComponentFixture<DoctorsSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
