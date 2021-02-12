import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllInventoryComponent } from './all-inventory.component';

describe('AllInventoryComponent', () => {
  let component: AllInventoryComponent;
  let fixture: ComponentFixture<AllInventoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
