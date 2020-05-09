import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMenuItemsComponent } from './all-menu-items.component';

describe('AllMenuItemsComponent', () => {
  let component: AllMenuItemsComponent;
  let fixture: ComponentFixture<AllMenuItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMenuItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
