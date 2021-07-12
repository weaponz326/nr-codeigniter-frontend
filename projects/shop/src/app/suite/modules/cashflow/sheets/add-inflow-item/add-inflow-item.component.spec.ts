import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInflowItemComponent } from './add-inflow-item.component';

describe('AddInflowItemComponent', () => {
  let component: AddInflowItemComponent;
  let fixture: ComponentFixture<AddInflowItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInflowItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInflowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
