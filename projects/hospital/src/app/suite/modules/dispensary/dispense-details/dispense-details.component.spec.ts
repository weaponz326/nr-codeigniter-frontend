import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispenseDetailsComponent } from './dispense-details.component';

describe('DispenseDetailsComponent', () => {
  let component: DispenseDetailsComponent;
  let fixture: ComponentFixture<DispenseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispenseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispenseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
