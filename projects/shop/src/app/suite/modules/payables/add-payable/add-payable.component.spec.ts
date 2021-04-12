import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPayableComponent } from './add-payable.component';

describe('AddPayableComponent', () => {
  let component: AddPayableComponent;
  let fixture: ComponentFixture<AddPayableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPayableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPayableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
