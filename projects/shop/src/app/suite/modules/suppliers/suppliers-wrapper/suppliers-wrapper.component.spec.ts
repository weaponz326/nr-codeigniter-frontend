import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersWrapperComponent } from './suppliers-wrapper.component';

describe('SuppliersWrapperComponent', () => {
  let component: SuppliersWrapperComponent;
  let fixture: ComponentFixture<SuppliersWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppliersWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
