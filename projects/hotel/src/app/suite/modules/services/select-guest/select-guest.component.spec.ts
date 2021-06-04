import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGuestComponent } from './select-guest.component';

describe('SelectGuestComponent', () => {
  let component: SelectGuestComponent;
  let fixture: ComponentFixture<SelectGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
