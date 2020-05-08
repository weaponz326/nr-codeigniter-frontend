import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-bills',
  templateUrl: './all-bills.component.html',
  styleUrls: ['./all-bills.component.css']
})
export class AllBillsComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Bill ID", dataField: "bill_code", width: "15%" },
    { text: "Patient Name", dataField: "patient_name", width: "45%" },
    { text: "Bill Date", dataField: "bill_date", filtertype: "range", width: "20%" },
    { text: "Total Amount", dataField: "amount", cellsalign: 'right', cellsformat: 'c2', width: "20%" }
  ];

  ngOnInit(): void {
  }

}
