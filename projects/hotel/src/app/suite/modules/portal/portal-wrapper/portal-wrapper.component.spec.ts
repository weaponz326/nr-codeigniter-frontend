import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalWrapperComponent } from './portal-wrapper.component';

describe('PortalWrapperComponent', () => {
  let component: PortalWrapperComponent;
  let fixture: ComponentFixture<PortalWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
