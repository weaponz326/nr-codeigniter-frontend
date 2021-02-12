import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewServicesComponent } from './view-services.component';

describe('ViewServicesComponent', () => {
  let component: ViewServicesComponent;
  let fixture: ComponentFixture<ViewServicesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
