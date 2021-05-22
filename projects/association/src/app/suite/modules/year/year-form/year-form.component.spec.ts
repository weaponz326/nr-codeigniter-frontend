import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearFormComponent } from './year-form.component';

describe('YearFormComponent', () => {
  let component: YearFormComponent;
  let fixture: ComponentFixture<YearFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
