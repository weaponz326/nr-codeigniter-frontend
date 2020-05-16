import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLettersComponent } from './all-letters.component';

describe('AllLettersComponent', () => {
  let component: AllLettersComponent;
  let fixture: ComponentFixture<AllLettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
