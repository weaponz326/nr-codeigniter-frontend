import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractorsWrapperComponent } from './contractors-wrapper.component';

describe('ContractorsWrapperComponent', () => {
  let component: ContractorsWrapperComponent;
  let fixture: ComponentFixture<ContractorsWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractorsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
