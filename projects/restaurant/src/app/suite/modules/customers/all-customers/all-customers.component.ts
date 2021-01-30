import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.css']
})
export class AllCustomersComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Customer ID", dataField: "customer_code", width: "25%" },
    { text: "Customer Name", dataField: "customer", width: "50%" },
    { text: "Phone No.", dataField: "phone", width: "25%" }
  ];

}
