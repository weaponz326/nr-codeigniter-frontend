import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuesFormComponent } from './dues-form.component';

describe('DuesFormComponent', () => {
  let component: DuesFormComponent;
  let fixture: ComponentFixture<DuesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
