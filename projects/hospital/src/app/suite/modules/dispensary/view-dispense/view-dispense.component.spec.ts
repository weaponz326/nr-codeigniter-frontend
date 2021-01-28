import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDispenseComponent } from './view-dispense.component';

describe('ViewDispenseComponent', () => {
  let component: ViewDispenseComponent;
  let fixture: ComponentFixture<ViewDispenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDispenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDispenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
