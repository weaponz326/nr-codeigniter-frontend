import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-parents',
  templateUrl: './all-parents.component.html',
  styleUrls: ['./all-parents.component.css']
})
export class AllParentsComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Parent ID", dataField: "parent_code", width: "15%" },
    { text: "Parent Name", dataField: "parent_name", width: "35%" },
    { text: "Ward(s)", dataField: "wards", width: "50%" }
  ];

  ngOnInit(): void {
  }

}
