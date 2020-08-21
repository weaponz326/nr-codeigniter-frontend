import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-term-activities',
  templateUrl: './term-activities.component.html',
  styleUrls: ['./term-activities.component.css']
})
export class TermActivitiesComponent implements OnInit {

  @ViewChild("classesButtonReference") classesButton: jqxButtonComponent;
  @ViewChild("subjectsButtonReference") subjectsButton: jqxButtonComponent;
  @ViewChild("teachersButtonReference") teachersButton: jqxButtonComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
