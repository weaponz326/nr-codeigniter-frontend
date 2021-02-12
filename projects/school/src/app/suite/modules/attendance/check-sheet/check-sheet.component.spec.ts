import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CheckSheetComponent } from './check-sheet.component';

describe('CheckSheetComponent', () => {
  let component: CheckSheetComponent;
  let fixture: ComponentFixture<CheckSheetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
