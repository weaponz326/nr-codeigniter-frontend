import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScrollnavComponent } from './main-scrollnav.component';

describe('MainScrollnavComponent', () => {
  let component: MainScrollnavComponent;
  let fixture: ComponentFixture<MainScrollnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainScrollnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainScrollnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
