import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralConfirmComponent } from './general-confirm.component';

describe('GeneralConfirmComponent', () => {
  let component: GeneralConfirmComponent;
  let fixture: ComponentFixture<GeneralConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
