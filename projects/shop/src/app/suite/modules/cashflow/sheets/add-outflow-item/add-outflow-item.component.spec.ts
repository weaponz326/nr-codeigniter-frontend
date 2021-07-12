import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOutflowItemComponent } from './add-outflow-item.component';

describe('AddOutflowItemComponent', () => {
  let component: AddOutflowItemComponent;
  let fixture: ComponentFixture<AddOutflowItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOutflowItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOutflowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
