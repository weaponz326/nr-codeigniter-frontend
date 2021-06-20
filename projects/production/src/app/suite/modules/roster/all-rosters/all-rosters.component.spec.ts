import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRostersComponent } from './all-rosters.component';

describe('AllRostersComponent', () => {
  let component: AllRostersComponent;
  let fixture: ComponentFixture<AllRostersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRostersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
