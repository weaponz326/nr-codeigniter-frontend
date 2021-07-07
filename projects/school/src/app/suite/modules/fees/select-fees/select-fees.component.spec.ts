import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFeesComponent } from './select-fees.component';

describe('SelectFeesComponent', () => {
  let component: SelectFeesComponent;
  let fixture: ComponentFixture<SelectFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
