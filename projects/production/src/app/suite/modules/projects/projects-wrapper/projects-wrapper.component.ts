import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-wrapper',
  templateUrl: './projects-wrapper.component.html',
  styleUrls: ['./projects-wrapper.component.css']
})
export class ProjectsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [];

  ngOnInit(): void {
  }

}
