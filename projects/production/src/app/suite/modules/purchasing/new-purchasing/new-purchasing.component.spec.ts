import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPurchasingComponent } from './new-purchasing.component';

describe('NewPurchasingComponent', () => {
  let component: NewPurchasingComponent;
  let fixture: ComponentFixture<NewPurchasingComponent>;

  beforeEach(async(() => {
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
