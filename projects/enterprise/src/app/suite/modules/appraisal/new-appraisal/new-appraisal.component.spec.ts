import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppraisalComponent } from './new-appraisal.component';

describe('NewAppraisalComponent', () => {
  let component: NewAppraisalComponent;
  let fixture: ComponentFixture<NewAppraisalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAppraisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
