import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';


@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  ngOnInit(): void {
  }

  // -----------------------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "No.", dataField: "item_number", width: "10%" },
    { text: "Description", dataField: "item_description", width: "35%" },
    { text: "Status", dataField: "status", columntype: "checkbox", width: "10%" },
    { text: "Remarks", dataField: "remarks", width: "45%" },
  ];

}
