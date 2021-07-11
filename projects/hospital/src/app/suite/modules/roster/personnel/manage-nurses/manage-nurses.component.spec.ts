import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNursesComponent } from './manage-nurses.component';

describe('ManageNursesComponent', () => {
  let component: ManageNursesComponent;
  let fixture: ComponentFixture<ManageNursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageNursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageNursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
