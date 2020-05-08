import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryWrapperComponent } from './laboratory-wrapper.component';

describe('LaboratoryWrapperComponent', () => {
  let component: LaboratoryWrapperComponent;
  let fixture: ComponentFixture<LaboratoryWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoryWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
