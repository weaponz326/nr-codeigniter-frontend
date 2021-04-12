import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReceivableComponent } from './add-receivable.component';

describe('AddReceivableComponent', () => {
  let component: AddReceivableComponent;
  let fixture: ComponentFixture<AddReceivableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReceivableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReceivableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
