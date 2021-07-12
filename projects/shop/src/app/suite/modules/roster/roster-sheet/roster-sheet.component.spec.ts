import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterSheetComponent } from './roster-sheet.component';

describe('RosterSheetComponent', () => {
  let component: RosterSheetComponent;
  let fixture: ComponentFixture<RosterSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RosterSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
