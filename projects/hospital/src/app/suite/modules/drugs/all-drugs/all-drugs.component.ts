import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-drugs',
  templateUrl: './all-drugs.component.html',
  styleUrls: ['./all-drugs.component.css']
})
export class AllDrugsComponent implements OnInit {

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // ----------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Drug ID", dataField: "drug_code", width: "20%" },
    { text: "Drug Name", dataField: "drug_name", width: "60%" },
    { text: "Quantity", dataField: "quantity", columntype: "number", cellalign: "right", width: "20%" },
  ];

}
