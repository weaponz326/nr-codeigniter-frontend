import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddContractorComponent } from './add-contractor.component';

describe('AddContractorComponent', () => {
  let component: AddContractorComponent;
  let fixture: ComponentFixture<AddContractorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddContractorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
