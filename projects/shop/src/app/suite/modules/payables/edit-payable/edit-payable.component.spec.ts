import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPayableComponent } from './edit-payable.component';

describe('EditPayableComponent', () => {
  let component: EditPayableComponent;
  let fixture: ComponentFixture<EditPayableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPayableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPayableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
