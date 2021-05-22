import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExecutiveComponent } from './new-executive.component';

describe('NewExecutiveComponent', () => {
  let component: NewExecutiveComponent;
  let fixture: ComponentFixture<NewExecutiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewExecutiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
