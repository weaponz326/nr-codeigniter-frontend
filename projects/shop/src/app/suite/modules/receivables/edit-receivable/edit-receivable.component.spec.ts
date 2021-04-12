import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReceivableComponent } from './edit-receivable.component';

describe('EditReceivableComponent', () => {
  let component: EditReceivableComponent;
  let fixture: ComponentFixture<EditReceivableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditReceivableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReceivableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
