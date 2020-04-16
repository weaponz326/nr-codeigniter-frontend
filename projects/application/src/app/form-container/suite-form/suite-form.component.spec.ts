import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteFormComponent } from './suite-form.component';

describe('SuiteFormComponent', () => {
  let component: SuiteFormComponent;
  let fixture: ComponentFixture<SuiteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
