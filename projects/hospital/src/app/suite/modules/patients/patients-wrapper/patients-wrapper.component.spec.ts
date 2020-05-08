import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsWrapperComponent } from './patients-wrapper.component';

describe('PatientsWrapperComponent', () => {
  let component: PatientsWrapperComponent;
  let fixture: ComponentFixture<PatientsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
