import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivablesWrapperComponent } from './receivables-wrapper.component';

describe('ReceivablesWrapperComponent', () => {
  let component: ReceivablesWrapperComponent;
  let fixture: ComponentFixture<ReceivablesWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivablesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivablesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
