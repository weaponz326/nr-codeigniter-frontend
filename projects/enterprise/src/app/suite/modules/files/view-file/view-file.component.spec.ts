import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewFileComponent } from './view-file.component';

describe('ViewFileComponent', () => {
  let component: ViewFileComponent;
  let fixture: ComponentFixture<ViewFileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
