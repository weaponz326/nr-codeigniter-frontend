import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDuesComponent } from './create-dues.component';

describe('CreateDuesComponent', () => {
  let component: CreateDuesComponent;
  let fixture: ComponentFixture<CreateDuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
