import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDispenseComponent } from './all-dispense.component';

describe('AllDispenseComponent', () => {
  let component: AllDispenseComponent;
  let fixture: ComponentFixture<AllDispenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDispenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDispenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
