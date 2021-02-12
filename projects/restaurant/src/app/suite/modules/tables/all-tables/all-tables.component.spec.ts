import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllTablesComponent } from './all-tables.component';

describe('AllTablesComponent', () => {
  let component: AllTablesComponent;
  let fixture: ComponentFixture<AllTablesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
