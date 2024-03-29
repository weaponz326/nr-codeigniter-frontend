import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewDrugComponent } from './view-drug.component';

describe('ViewDrugComponent', () => {
  let component: ViewDrugComponent;
  let fixture: ComponentFixture<ViewDrugComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDrugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
