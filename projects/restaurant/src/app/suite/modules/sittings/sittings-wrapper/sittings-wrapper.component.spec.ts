import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SittingsWrapperComponent } from './sittings-wrapper.component';

describe('SittingsWrapperComponent', () => {
  let component: SittingsWrapperComponent;
  let fixture: ComponentFixture<SittingsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SittingsWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SittingsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
