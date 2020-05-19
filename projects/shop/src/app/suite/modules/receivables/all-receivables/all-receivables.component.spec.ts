import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReceivablesComponent } from './all-receivables.component';

describe('AllReceivablesComponent', () => {
  let component: AllReceivablesComponent;
  let fixture: ComponentFixture<AllReceivablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllReceivablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReceivablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
