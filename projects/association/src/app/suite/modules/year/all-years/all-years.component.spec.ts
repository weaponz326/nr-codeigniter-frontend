import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllYearsComponent } from './all-years.component';

describe('AllYearsComponent', () => {
  let component: AllYearsComponent;
  let fixture: ComponentFixture<AllYearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllYearsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
