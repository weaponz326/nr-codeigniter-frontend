import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewContractorComponent } from './view-contractor.component';

describe('ViewContractorComponent', () => {
  let component: ViewContractorComponent;
  let fixture: ComponentFixture<ViewContractorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewContractorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
