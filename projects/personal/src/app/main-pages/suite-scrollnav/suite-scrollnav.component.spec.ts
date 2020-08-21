import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteScrollnavComponent } from './suite-scrollnav.component';

describe('SuiteScrollnavComponent', () => {
  let component: SuiteScrollnavComponent;
  let fixture: ComponentFixture<SuiteScrollnavComponent>;

  beforeEach(async(() => {
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
