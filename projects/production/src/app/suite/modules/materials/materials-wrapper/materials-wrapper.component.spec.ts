import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsWrapperComponent } from './materials-wrapper.component';

describe('MaterialsWrapperComponent', () => {
  let component: MaterialsWrapperComponent;
  let fixture: ComponentFixture<MaterialsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialsWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
