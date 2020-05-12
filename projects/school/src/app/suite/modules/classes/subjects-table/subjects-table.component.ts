import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-subjects-table',
  templateUrl: './subjects-table.component.html',
  styleUrls: ['./subjects-table.component.css']
})
export class SubjectsTableComponent implements OnInit {

  constructor() { }

  @ViewChild("subjectsGridReference") detailsGrid: jqxGridComponent;

  // grid columns
  columns: any[] = [
    { text: "Subject Code", dataField: "subject_code", width: "30%" },
    { text: "Subject Name", dataField: "subject_name", width: "70%" },
  ];

  ngOnInit(): void {
  }

}
