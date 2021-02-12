import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewDrugComponent } from './new-drug.component';

describe('NewDrugComponent', () => {
  let component: NewDrugComponent;
  let fixture: ComponentFixture<NewDrugComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDrugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
