import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllDeliveriesComponent } from './all-deliveries.component';

describe('AllDeliveriesComponent', () => {
  let component: AllDeliveriesComponent;
  let fixture: ComponentFixture<AllDeliveriesComponent>;

  beforeEach(waitForAsync(() => {
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
