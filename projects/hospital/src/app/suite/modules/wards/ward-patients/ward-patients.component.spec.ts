import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WardPatientsComponent } from './ward-patients.component';

describe('WardPatientsComponent', () => {
  let component: WardPatientsComponent;
  let fixture: ComponentFixture<WardPatientsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WardPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WardPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
