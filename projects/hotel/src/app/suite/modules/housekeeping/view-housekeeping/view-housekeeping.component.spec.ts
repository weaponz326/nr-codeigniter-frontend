import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHousekeepingComponent } from './view-housekeeping.component';

describe('ViewHousekeepingComponent', () => {
  let component: ViewHousekeepingComponent;
  let fixture: ComponentFixture<ViewHousekeepingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHousekeepingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHousekeepingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
