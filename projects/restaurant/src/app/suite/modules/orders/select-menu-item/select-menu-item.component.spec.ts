import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMenuItemComponent } from './select-menu-item.component';

describe('SelectMenuItemComponent', () => {
  let component: SelectMenuItemComponent;
  let fixture: ComponentFixture<SelectMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectMenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
