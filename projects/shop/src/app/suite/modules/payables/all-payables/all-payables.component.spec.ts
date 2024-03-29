import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllPayablesComponent } from './all-payables.component';

describe('AllPayablesComponent', () => {
  let component: AllPayablesComponent;
  let fixture: ComponentFixture<AllPayablesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPayablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPayablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
