import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StafWrapperComponent } from './staf-wrapper.component';

describe('StafWrapperComponent', () => {
  let component: StafWrapperComponent;
  let fixture: ComponentFixture<StafWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StafWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StafWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
