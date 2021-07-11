import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBatchesComponent } from './manage-batches.component';

describe('ManageBatchesComponent', () => {
  let component: ManageBatchesComponent;
  let fixture: ComponentFixture<ManageBatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageBatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
