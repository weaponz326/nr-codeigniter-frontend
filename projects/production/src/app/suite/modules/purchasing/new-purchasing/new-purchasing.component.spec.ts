import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewPurchasingComponent } from './new-purchasing.component';

describe('NewPurchasingComponent', () => {
  let component: NewPurchasingComponent;
  let fixture: ComponentFixture<NewPurchasingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPurchasingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPurchasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
