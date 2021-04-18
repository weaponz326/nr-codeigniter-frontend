import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsWrapperComponent } from './projects-wrapper.component';

describe('ProjectsWrapperComponent', () => {
  let component: ProjectsWrapperComponent;
  let fixture: ComponentFixture<ProjectsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
