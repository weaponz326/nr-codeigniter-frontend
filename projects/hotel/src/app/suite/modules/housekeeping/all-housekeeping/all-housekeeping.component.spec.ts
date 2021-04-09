import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHousekeepingComponent } from './all-housekeeping.component';

describe('AllHousekeepingComponent', () => {
  let component: AllHousekeepingComponent;
  let fixture: ComponentFixture<AllHousekeepingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllHousekeepingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHousekeepingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
