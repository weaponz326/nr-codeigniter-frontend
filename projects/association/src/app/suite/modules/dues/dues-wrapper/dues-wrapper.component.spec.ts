import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuesWrapperComponent } from './dues-wrapper.component';

describe('DuesWrapperComponent', () => {
  let component: DuesWrapperComponent;
  let fixture: ComponentFixture<DuesWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuesWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
