import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxListBoxComponent } from 'jqwidgets-ng/jqxlistbox';

@Component({
  selector: 'app-subjects-table',
  templateUrl: './subjects-table.component.html',
  styleUrls: ['./subjects-table.component.css']
})
export class SubjectsTableComponent implements OnInit {

  constructor() { }

  @ViewChild('allSubjectsReference') allSubjects: jqxListBoxComponent;
  @ViewChild('classSubjectsReference') classSubjects: jqxListBoxComponent;

  ngOnInit(): void {
  }

}
