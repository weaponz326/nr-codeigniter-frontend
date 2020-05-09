import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDeliveriesComponent } from './all-deliveries.component';

describe('AllDeliveriesComponent', () => {
  let component: AllDeliveriesComponent;
  let fixture: ComponentFixture<AllDeliveriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDeliveriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
