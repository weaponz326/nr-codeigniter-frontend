import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWardComponent } from './select-ward.component';

describe('SelectWardComponent', () => {
  let component: SelectWardComponent;
  let fixture: ComponentFixture<SelectWardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectWardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectWardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
