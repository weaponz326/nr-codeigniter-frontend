import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTermComponent } from './select-term.component';

describe('SelectTermComponent', () => {
  let component: SelectTermComponent;
  let fixture: ComponentFixture<SelectTermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectTermComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
