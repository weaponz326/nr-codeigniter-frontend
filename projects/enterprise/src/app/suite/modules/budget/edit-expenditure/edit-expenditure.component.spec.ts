import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExpenditureComponent } from './edit-expenditure.component';

describe('EditExpenditureComponent', () => {
  let component: EditExpenditureComponent;
  let fixture: ComponentFixture<EditExpenditureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExpenditureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
