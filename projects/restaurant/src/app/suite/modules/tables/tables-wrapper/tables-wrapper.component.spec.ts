import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TablesWrapperComponent } from './tables-wrapper.component';

describe('TablesWrapperComponent', () => {
  let component: TablesWrapperComponent;
  let fixture: ComponentFixture<TablesWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
