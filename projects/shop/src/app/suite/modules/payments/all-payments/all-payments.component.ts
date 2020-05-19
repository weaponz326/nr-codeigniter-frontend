import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-payments',
  templateUrl: './all-payments.component.html',
  styleUrls: ['./all-payments.component.css']
})
export class AllPaymentsComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Payment ID", dataField: "payment_code", width: "15%" },
    { text: "Payment Date", dataField: "payment_date", filtertype: "range", width: "20%" },
    { text: "Customer Name", dataField: "customer", width: "45%" },
    { text: 'Amount Paid', dataField: 'amount_paid', width: "20%", cellsalign: 'right', cellsformat: 'c2' }
  ];

  ngOnInit(): void {
  }

}
