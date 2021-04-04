import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionWrapperComponent } from './reception-wrapper.component';

describe('ReceptionWrapperComponent', () => {
  let component: ReceptionWrapperComponent;
  let fixture: ComponentFixture<ReceptionWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
