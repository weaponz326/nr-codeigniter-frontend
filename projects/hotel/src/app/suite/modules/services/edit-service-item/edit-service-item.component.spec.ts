import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceItemComponent } from './edit-service-item.component';

describe('EditServiceItemComponent', () => {
  let component: EditServiceItemComponent;
  let fixture: ComponentFixture<EditServiceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditServiceItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
