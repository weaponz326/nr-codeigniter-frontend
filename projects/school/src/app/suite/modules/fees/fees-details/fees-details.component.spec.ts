import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesDetailsComponent } from './fees-details.component';

describe('FeesDetailsComponent', () => {
  let component: FeesDetailsComponent;
  let fixture: ComponentFixture<FeesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
