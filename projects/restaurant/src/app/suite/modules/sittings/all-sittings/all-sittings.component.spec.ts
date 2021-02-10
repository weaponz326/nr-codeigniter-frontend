import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSittingsComponent } from './all-sittings.component';

describe('AllSittingsComponent', () => {
  let component: AllSittingsComponent;
  let fixture: ComponentFixture<AllSittingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSittingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSittingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
