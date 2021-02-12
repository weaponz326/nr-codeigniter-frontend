import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllDrugsComponent } from './all-drugs.component';

describe('AllDrugsComponent', () => {
  let component: AllDrugsComponent;
  let fixture: ComponentFixture<AllDrugsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDrugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
