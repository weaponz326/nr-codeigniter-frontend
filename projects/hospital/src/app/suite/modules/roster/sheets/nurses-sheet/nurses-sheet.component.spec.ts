import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursesSheetComponent } from './nurses-sheet.component';

describe('NursesSheetComponent', () => {
  let component: NursesSheetComponent;
  let fixture: ComponentFixture<NursesSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NursesSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NursesSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
