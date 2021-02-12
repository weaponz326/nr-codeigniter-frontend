import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractorFormComponent } from './contractor-form.component';

describe('ContractorFormComponent', () => {
  let component: ContractorFormComponent;
  let fixture: ComponentFixture<ContractorFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
