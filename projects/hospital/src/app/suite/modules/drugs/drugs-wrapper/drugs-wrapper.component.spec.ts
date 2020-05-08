import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugsWrapperComponent } from './drugs-wrapper.component';

describe('DrugsWrapperComponent', () => {
  let component: DrugsWrapperComponent;
  let fixture: ComponentFixture<DrugsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
