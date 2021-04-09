import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHousekeepingComponent } from './new-housekeeping.component';

describe('NewHousekeepingComponent', () => {
  let component: NewHousekeepingComponent;
  let fixture: ComponentFixture<NewHousekeepingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHousekeepingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHousekeepingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
