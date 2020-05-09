import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemFormComponent } from './menu-item-form.component';

describe('MenuItemFormComponent', () => {
  let component: MenuItemFormComponent;
  let fixture: ComponentFixture<MenuItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
