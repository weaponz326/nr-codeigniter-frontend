import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveFormComponent } from './executive-form.component';

describe('ExecutiveFormComponent', () => {
  let component: ExecutiveFormComponent;
  let fixture: ComponentFixture<ExecutiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
