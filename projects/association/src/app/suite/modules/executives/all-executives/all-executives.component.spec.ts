import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExecutivesComponent } from './all-executives.component';

describe('AllExecutivesComponent', () => {
  let component: AllExecutivesComponent;
  let fixture: ComponentFixture<AllExecutivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllExecutivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllExecutivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
