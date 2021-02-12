import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllCustomersComponent } from './all-customers.component';

describe('AllCustomersComponent', () => {
  let component: AllCustomersComponent;
  let fixture: ComponentFixture<AllCustomersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
