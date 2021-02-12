import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllEquipmentComponent } from './all-equipment.component';

describe('AllEquipmentComponent', () => {
  let component: AllEquipmentComponent;
  let fixture: ComponentFixture<AllEquipmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
