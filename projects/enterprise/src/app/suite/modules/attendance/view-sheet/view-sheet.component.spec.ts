import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewSheetComponent } from './view-sheet.component';

describe('ViewSheetComponent', () => {
  let component: ViewSheetComponent;
  let fixture: ComponentFixture<ViewSheetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
