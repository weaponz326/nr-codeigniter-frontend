import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorsWrapperComponent } from './contractors-wrapper.component';

describe('ContractorsWrapperComponent', () => {
  let component: ContractorsWrapperComponent;
  let fixture: ComponentFixture<ContractorsWrapperComponent>;

  beforeEach(async(() => {
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
