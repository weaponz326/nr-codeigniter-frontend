import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensaryWrapperComponent } from './dispensary-wrapper.component';

describe('DispensaryWrapperComponent', () => {
  let component: DispensaryWrapperComponent;
  let fixture: ComponentFixture<DispensaryWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispensaryWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispensaryWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
