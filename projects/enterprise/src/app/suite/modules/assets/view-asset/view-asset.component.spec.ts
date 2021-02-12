import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewAssetComponent } from './view-asset.component';

describe('ViewAssetComponent', () => {
  let component: ViewAssetComponent;
  let fixture: ComponentFixture<ViewAssetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
