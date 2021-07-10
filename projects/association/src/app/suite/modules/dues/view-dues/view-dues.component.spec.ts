import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDuesComponent } from './view-dues.component';

describe('ViewDuesComponent', () => {
  let component: ViewDuesComponent;
  let fixture: ComponentFixture<ViewDuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
