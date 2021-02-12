import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssetsWrapperComponent } from './assets-wrapper.component';

describe('AssetsWrapperComponent', () => {
  let component: AssetsWrapperComponent;
  let fixture: ComponentFixture<AssetsWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
