import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllAccountsComponent } from './all-accounts.component';

describe('AllAccountsComponent', () => {
  let component: AllAccountsComponent;
  let fixture: ComponentFixture<AllAccountsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
