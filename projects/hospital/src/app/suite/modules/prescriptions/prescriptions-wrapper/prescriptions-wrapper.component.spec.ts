import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrescriptionsWrapperComponent } from './prescriptions-wrapper.component';

describe('PrescriptionsWrapperComponent', () => {
  let component: PrescriptionsWrapperComponent;
  let fixture: ComponentFixture<PrescriptionsWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptionsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
