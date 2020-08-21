import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-invoice',
  templateUrl: './all-invoice.component.html',
  styleUrls: ['./all-invoice.component.css']
})
export class AllInvoiceComponent implements OnInit {

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // -----------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Invoice No.", dataField: "invoice_number", width: "20%" },
    { text: "Invoice Date", dataField: "invoice_date", width: "25%" },
    { text: "Customer Name", dataField: "customer_name", width: "55%" },
  ];

}
