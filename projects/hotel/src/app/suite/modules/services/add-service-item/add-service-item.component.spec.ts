import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceItemComponent } from './add-service-item.component';

describe('AddServiceItemComponent', () => {
  let component: AddServiceItemComponent;
  let fixture: ComponentFixture<AddServiceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServiceItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
