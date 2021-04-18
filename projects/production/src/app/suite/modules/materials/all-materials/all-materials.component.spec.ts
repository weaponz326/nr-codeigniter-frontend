import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMaterialsComponent } from './all-materials.component';

describe('AllMaterialsComponent', () => {
  let component: AllMaterialsComponent;
  let fixture: ComponentFixture<AllMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
