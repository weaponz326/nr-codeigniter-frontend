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
    { text: "Payment ID", dataField: "payment_code", width: "12%" },
    { text: "Payment Date", dataField: "payment_date", filtertype: "range", width: "18%" },
    { text: "Guest Name", dataField: "guest_name", width: "40%" },
    { text: "Guest ID", dataField: "guest_id", width: "12%" },
    { text: 'Amount Payed', dataField: 'amount_payed', width: "18%", cellsalign: 'right', cellsformat: 'c2' }
  ];

  ngOnInit(): void {
  }

}