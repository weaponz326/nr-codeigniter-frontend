import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDispenseComponent } from './new-dispense.component';

describe('NewDispenseComponent', () => {
  let component: NewDispenseComponent;
  let fixture: ComponentFixture<NewDispenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDispenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDispenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
