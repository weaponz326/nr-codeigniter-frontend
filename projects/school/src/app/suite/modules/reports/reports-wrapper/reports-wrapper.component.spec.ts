import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsWrapperComponent } from './reports-wrapper.component';

describe('ReportsWrapperComponent', () => {
  let component: ReportsWrapperComponent;
  let fixture: ComponentFixture<ReportsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
