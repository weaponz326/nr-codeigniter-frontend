import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearWrapperComponent } from './year-wrapper.component';

describe('YearWrapperComponent', () => {
  let component: YearWrapperComponent;
  let fixture: ComponentFixture<YearWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
