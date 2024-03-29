import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RinkDetailsComponent } from './rink-details.component';

describe('RinkDetailsComponent', () => {
  let component: RinkDetailsComponent;
  let fixture: ComponentFixture<RinkDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RinkDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RinkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
