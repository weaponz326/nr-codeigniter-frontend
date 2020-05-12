import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsWrapperComponent } from './terms-wrapper.component';

describe('TermsWrapperComponent', () => {
  let component: TermsWrapperComponent;
  let fixture: ComponentFixture<TermsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
