import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentWrapperComponent } from './equipment-wrapper.component';

describe('EquipmentWrapperComponent', () => {
  let component: EquipmentWrapperComponent;
  let fixture: ComponentFixture<EquipmentWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
