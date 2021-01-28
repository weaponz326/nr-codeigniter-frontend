import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGeneralComponent } from './add-general.component';

describe('AddGeneralComponent', () => {
  let component: AddGeneralComponent;
  let fixture: ComponentFixture<AddGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
