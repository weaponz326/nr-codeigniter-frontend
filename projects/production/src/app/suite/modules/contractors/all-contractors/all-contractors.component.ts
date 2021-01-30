import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-contractors',
  templateUrl: './all-contractors.component.html',
  styleUrls: ['./all-contractors.component.css']
})
export class AllContractorsComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  ngOnInit(): void {
  }

  // widgets
  // -----------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Contractor Name", dataField: "contractor_name", width: "45%" },
    { text: "Category", dataField: "category", width: "25%" },
    { text: "Project", dataField: "project", width: "30%" },
  ];

}
