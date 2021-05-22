import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutivesWrapperComponent } from './executives-wrapper.component';

describe('ExecutivesWrapperComponent', () => {
  let component: ExecutivesWrapperComponent;
  let fixture: ComponentFixture<ExecutivesWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutivesWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutivesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
