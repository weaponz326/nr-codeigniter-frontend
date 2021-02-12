import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SuiteScrollnavComponent } from './suite-scrollnav.component';

describe('SuiteScrollnavComponent', () => {
  let component: SuiteScrollnavComponent;
  let fixture: ComponentFixture<SuiteScrollnavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiteScrollnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteScrollnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
