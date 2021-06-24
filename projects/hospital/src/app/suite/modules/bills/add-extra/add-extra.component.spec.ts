import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExtraComponent } from './add-extra.component';

describe('AddExtraComponent', () => {
  let component: AddExtraComponent;
  let fixture: ComponentFixture<AddExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
