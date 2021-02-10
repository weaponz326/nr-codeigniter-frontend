import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SittingFormComponent } from './sitting-form.component';

describe('SittingFormComponent', () => {
  let component: SittingFormComponent;
  let fixture: ComponentFixture<SittingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SittingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SittingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
