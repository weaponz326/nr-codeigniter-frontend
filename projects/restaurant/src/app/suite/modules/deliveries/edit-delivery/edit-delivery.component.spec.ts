import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeliveryComponent } from './edit-delivery.component';

describe('EditDeliveryComponent', () => {
  let component: EditDeliveryComponent;
  let fixture: ComponentFixture<EditDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
