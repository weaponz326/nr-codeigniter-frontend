import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDuesComponent } from './all-dues.component';

describe('AllDuesComponent', () => {
  let component: AllDuesComponent;
  let fixture: ComponentFixture<AllDuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
