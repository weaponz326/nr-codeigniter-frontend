import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSittingComponent } from './view-sitting.component';

describe('ViewSittingComponent', () => {
  let component: ViewSittingComponent;
  let fixture: ComponentFixture<ViewSittingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSittingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
